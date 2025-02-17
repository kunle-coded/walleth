import { mnemonicToSeed } from "@scure/bip39";
import { HDKey } from "@scure/bip32";
import { bytesToHex } from "@noble/hashes/utils";
import { encryptData } from "../helpers/encryption";
import { Account, Config, Data } from "../types/config";
import { keccak256 } from "ethers";

// Create user account

// First-time setup: User creates a password → Creates mnemonic → Generates private key → Encrypts private key → Saves encrypted data locally.
// 1. User creates password - get user password from local storage
// 2. Create a mnemonic - bip39
// 3. Generate a private key from mnemonic
// 4. Encrypt private key with user password - crypto/Web Crypto API
// 5. Store encrypted private key in indexedDB locally on user's device browser - indexedDb

// 3. Preventing Unauthorized Access
// To prevent unauthorized access if someone gains access to the browser storage:

// Auto-lock the wallet after inactivity.
// Do not store the password itself—always request the password for decryption.
// Use biometric authentication (if available) for better UX.

export default async function createAccount(
  password: string,
  mnemonic: string
) {
  const seed = await mnemonicToSeed(mnemonic);
  const hdWallet = HDKey.fromMasterSeed(seed);

  // Derive a private key using a BIP-44 path
  // const path = "m/44'/60'/0'/0/0"; // First Ethereum account
  const path = "m/44'/60'/0'/0/0";
  const childNode = hdWallet.derive(path);

  // Create private key
  if (childNode.privateKey) {
    const privateKey = bytesToHex(childNode.privateKey);
    const { encrypted, iv, salt } = await encryptData(privateKey, password);

    const configDBRequest = indexedDB.open("PUDWDB", 1);
    const wallethDBRequest = indexedDB.open("WALLETHDB", 1);

    configDBRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).error;
      console.log(error?.message);
    };

    // configDBRequest.onupgradeneeded = (event) => {
    //   const db = (event.target as IDBOpenDBRequest).result;

    //   if (!db.objectStoreNames.contains("PUDWDB")) {
    //     db.createObjectStore("PUDWDB", { keyPath: "id" });
    //   }
    // };

    configDBRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction("PUDWDB", "readwrite");
      const store = transaction.objectStore("PUDWDB");

      const getConfigRequest = store.get("config");
      const getSessionRequest = store.get("session");

      getConfigRequest.onerror = (event) => {
        const error = (event.target as IDBRequest).error;
        console.log("getConfigRequest error", error?.message);
      };

      getConfigRequest.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;
        console.log("config result", result);
        if (result) {
          console.log("no config yet", result);
          // const configPUDWDBData: Config = {
          //   data: encrypted,
          //   id: "config",
          //   metadata: { identifierId: iv.buffer, profileId: salt.buffer },
          // };
          result.data = encrypted;
          result.metadata = { identifierId: iv.buffer, profileId: salt.buffer };

          store.put(result);
        }
      };

      getSessionRequest.onerror = (event) => {
        const error = (event.target as IDBRequest).error;
        console.log("getSessionRequest error", error?.message);
      };

      getSessionRequest.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;
        if (result) {
          const { id } = result;
          console.log("session result", result);
          console.log("session data", id);

          // const newSession = { ...result, isFirstWallethSetup: false };

          // result = {}
          result.isFirstWallethSetup = false;

          const updatedSession = store.put(result);

          updatedSession.onsuccess = () => {
            console.log("Session added successfully");
          };
          updatedSession.onerror = (event) => {
            console.error("Failed to update Session", event);
          };
        } else {
          const session = {
            id: "session",
            isFirstWallethSetup: false,
            timestamp: Date.now(),
          };
          store.add(session);
        }
      };
    };

    wallethDBRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).error;
      console.log(error?.message);
      localStorage.setItem("userStatus", "error_creating_account");
    };

    wallethDBRequest.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains("WALLETHDB")) {
        db.createObjectStore("WALLETHDB", { keyPath: "name" });
      }
    };

    wallethDBRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction("WALLETHDB", "readwrite");
      const store = transaction.objectStore("WALLETHDB");

      const getDataRequest = store.get("data");
      const getMetaRequest = store.get("meta");

      getDataRequest.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;
        const publicKey =
          childNode.publicKey?.length === 65
            ? childNode.publicKey.slice(1)
            : childNode.publicKey;

        const publicKeyHash = publicKey ? keccak256(publicKey) : null;
        const address = `0x${publicKeyHash?.slice(-40)}`;

        const account: Account = {
          address,
          id: crypto.randomUUID(),
          metadata: {
            importTime: Date.now(),
            keyring: "HD key tree",
            lastSelected: Date.now(),
            name: "Account 1",
            nameLastUpdated: Date.now().toLocaleString(),
          },
          methods: [],
          options: {},
          type: "eip155:eoa",
        };

        const data: Data = {
          name: "data",
          AccountController: {
            internalAccount: {
              accounts: { [account.id]: account },
              selectedAccount: account.id,
            },
          },
          AccountTrackerController: [
            {
              id: account.id,
              name: account.metadata.name,
              createdAt: account.metadata.importTime,
              type: account.type,
            },
          ],
          AddressBookController: {},
          AuthenticationController: {},
          CurrencyController: {},
          GasFeeController: {},
          LoggingController: {},
          MultichainBalancesController: {},
          MultichainRatesController: {},
          NetworkController: {},
          NftController: {},
          NotificationServicesController: {},
          OnboardingController: {},
          PermissionController: {},
          PreferencesController: {},
          SelectedNetworkController: {},
          TokenBalancesController: {},
          TokenListController: {},
          TokenRatesController: {},
          TokensController: {},
          TransactionController: {},
          firstTimeInfo: { date: Date.now(), version: "0.0.0" },
        };

        if (!result) {
          store.add(data);
          // localStorage.setItem("mnemonic", mnemonic);
          localStorage.setItem("userStatus", "success");
        } else {
          localStorage.setItem("userStatus", "account_exists");
          console.log(localStorage.getItem("userStatus"));
        }
      };

      getMetaRequest.onsuccess = () => {
        if (!getDataRequest.result) {
          const data = { name: "meta", meta: { version: "0.0.0" } };
          store.add(data);
        }
      };
    };
  } else {
    console.log("No private key found.");
    localStorage.setItem("userStatus", "no_account_found");
  }
}
