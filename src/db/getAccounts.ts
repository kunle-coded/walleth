import { UserAccount } from "../types/assets";

export default async function getAccounts(): Promise<UserAccount> {
  return new Promise((resolve, reject) => {
    const wallethDBRequest = indexedDB.open("WALLETHDB", 1);

    wallethDBRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).result;
      console.log(error?.message);
    };

    wallethDBRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction("WALLETHDB", "readonly");
      const store = transaction.objectStore("WALLETHDB");

      const getDataRequest = store.get("data");

      getDataRequest.onerror = (event) => {
        const error = (event.target as IDBRequest).result;
        console.log(error);
        reject(error);
      };

      getDataRequest.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;

        if (result) {
          //   const { data } = result;
          const accounts = result.AccountController.internalAccount;
          resolve(accounts);
        }
      };
    };
  });
}
