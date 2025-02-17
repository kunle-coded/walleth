import { generateMnemonic, mnemonicToSeed } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";
import { HDKey } from "@scure/bip32";
import { bytesToHex } from "@noble/hashes/utils";
import { decryptData } from "../helpers/encryption";
import { Account } from "../types/config";
import { keccak256 } from "ethers";

// Create new wallet account account

// New account steps: User logs in with password → restore wallet from storage → Decrypts private key → Generates new account (address) → Adds new data to storage.

/**
 * @param password
 * @returns wallet from storage
 */
async function restoreWallet(password: string) {
  return new Promise<ArrayBuffer>((resolve, reject) => {
    const configDBRequest = indexedDB.open("PUDWDB", 1);

    configDBRequest.onerror = (event) =>
      reject(() => {
        const error = (event.target as IDBRequest).error;
        console.log(error?.message);
      });

    configDBRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      const transaction = db.transaction("PUDWDB", "readonly");
      const store = transaction.objectStore("PUDWDB");

      const getConfigRequest = store.get("config");

      getConfigRequest.onsuccess = async (event) => {
        const result = (event.target as IDBRequest).result;
        if (result) {
          const { data, metadata } = result;

          const privateKey = await decryptData(
            metadata.identifierId,
            metadata.profileId,
            password,
            data
          );

          resolve(privateKey);
        }
      };
    };
  });
}

/**
 * @param password
 * Creates new public address from wallet
 */

export default async function createNewAccount(password: string) {
  const privateKey = await restoreWallet(password);
  console.log("privateKey from new", privateKey);
  if (privateKey) {
    const wallethDBRequest = indexedDB.open("WALLETHDB", 1);

    wallethDBRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).error;
      console.log("wallethDBRequest error", error?.message);
    };

    wallethDBRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction("WALLETHDB", "readwrite");
      const store = transaction.objectStore("WALLETHDB");

      const getDataRequest = store.get("data");

      getDataRequest.onerror = (event) => {
        const error = (event.target as IDBRequest).error;
        console.log("getDataRequest error", error?.message);
      };

      getDataRequest.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;

        if (result) {
          const accounts = result.AccountController?.internalAccount?.accounts;
          const accountLength = Object.entries(accounts).length;

          const hdWallet = HDKey.fromMasterSeed(new Uint8Array(privateKey));
          // Derive a private key using a BIP-44 path
          const path = `m/44'/60'/0'/0/${accountLength + 1}`;
          const childNode = hdWallet.derive(path);

          const publicKey =
            childNode.publicKey?.length === 65
              ? childNode.publicKey.slice(1)
              : childNode.publicKey;

          const publicKeyHash = publicKey ? keccak256(publicKey) : null;
          const address = `0x${publicKeyHash?.slice(-40)}`;
          console.log("new address: ", address);

          // new account
          const newAccount: Account = {
            address,
            id: crypto.randomUUID(),
            metadata: {
              importTime: Date.now(),
              keyring: "HD key tree",
              lastSelected: Date.now(),
              name: `Account ${accountLength + 1}`,
              nameLastUpdated: Date.now().toLocaleString(),
            },
            methods: [],
            options: {},
            type: "eip155:eoa",
          };

          result.AccountController.internalAccount.accounts = {
            ...result.AccountController.internalAccount.accounts,
            [newAccount.id]: newAccount,
          };

          result.AccountTrackerController = [
            ...result.AccountTrackerController,
            {
              [newAccount.id]: newAccount.id,
              name: newAccount.metadata.name,
              createdAt: newAccount.metadata.importTime,
            },
          ];

          // Add data to store
          const updatedAccount = store.put(result);

          updatedAccount.onsuccess = () => {
            console.log("Account added successfully");
          };
          updatedAccount.onerror = (event) => {
            console.error("Failed to update accounts", event);
          };
        }
      };
    };
  } else {
    throw new Error("Error retrieving account master key");
  }
}
