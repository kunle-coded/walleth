import { decryptData } from "../helpers/encryption";

// Login user account
// User enters password → Decrypts wallet data → Restores account without re-entering mnemonic.

/**
 *
 * @param password
 * @returns Promise
 */
export default async function loginUser(password: string) {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("PUDWDB", 1);

    dbRequest.onerror = (event) =>
      reject(
        new Error(
          `Database error: ${(event.target as IDBOpenDBRequest).error?.message}`
        )
      );

    dbRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction("PUDWDB", "readonly");
      const store = transaction.objectStore("PUDWDB");

      const getConfigRequest = store.get("config");

      getConfigRequest.onsuccess = async (event) => {
        const result = (event.target as IDBRequest).result;

        if (!result) {
          return reject(new Error("User data not found."));
        }

        const { data, metadata } = result;
        const { identifierId, profileId } = metadata;

        try {
          await decryptData(identifierId, profileId, password, data);
          console.log("login successfull");
          resolve(true); // Login successful
        } catch (error) {
          reject(new Error("Incorrect password"));
        }
      };

      getConfigRequest.onerror = (event) =>
        reject(
          new Error(
            `Error retrieving account: ${
              (event.target as IDBRequest).error?.message
            }`
          )
        );
    };
  });
}
