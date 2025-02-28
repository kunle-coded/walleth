import { Address, AddressBook } from "../types/config";

export default async function getAddressBook(chainId: string) {
  return new Promise((resolve, reject) => {
    const wallethDBRequest = indexedDB.open("WALLETHDB", 1);

    wallethDBRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).result;
      console.log(error?.message);
      reject(error);
    };

    wallethDBRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction("WALLETHDB", "readwrite");
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
          const addressBook = result.AddressBookController.addressBook[chainId];
          if (addressBook) {
            const addressBookList: Address[] = [];

            for (const [key, value] of Object.entries(addressBook) as [
              string,
              { chainId: string; id: string; memo: string; name: string }
            ][]) {
              addressBookList.push(value);
            }
            resolve(addressBookList);
          } else {
            reject(new Error("Address book not found. Invalid chainId!"));
          }
        }
      };
    };
  });
}
