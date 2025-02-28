import { Address, AddressBook } from "../types/config";

export default async function addAddressBook(name: string, address: string) {
  const wallethDBRequest = indexedDB.open("WALLETHDB", 1);

  wallethDBRequest.onerror = (event) => {
    const error = (event.target as IDBRequest).result;
    console.log(error?.message);
  };

  wallethDBRequest.onsuccess = (event) => {
    const db = (event.target as IDBOpenDBRequest).result;
    const transaction = db.transaction("WALLETHDB", "readwrite");
    const store = transaction.objectStore("WALLETHDB");

    const getDataRequest = store.get("data");

    getDataRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).result;
      console.log(error);
    };

    getDataRequest.onsuccess = (event) => {
      const result = (event.target as IDBRequest).result;

      if (result) {
        const contact: Address = {
          address,
          chainId: "0x1",
          id: crypto.randomUUID(),
          memo: "",
          name,
        };

        if (result.AddressBookController.addressBook[contact.chainId]) {
          result.AddressBookController.addressBook[contact.chainId] = {
            ...result.AddressBookController.addressBook[contact.chainId],
            [address]: contact,
          };
        }

        const updatedAdressBook = store.put(result);

        updatedAdressBook.onsuccess = () => {
          window.dispatchEvent(new Event("indexedDB_updated"));
        };
        updatedAdressBook.onerror = () => {
          console.log("error updating selected account");
        };

        // AddressBookController addressBook

        // for (const [key, value] of Object.entries(accounts) as [
        //   string,
        //   { id: string }
        // ][]) {
        //   if (key === selected) {
        //     if (key === value.id) {
        //       result.AccountController.internalAccount.selectedAccount =
        //         value.id;
        //     }
        //   }
        // }

        // const updatedAccount = store.put(result);

        // updatedAccount.onsuccess = () => {
        //   window.dispatchEvent(new Event("indexedDB_updated"));
        // };
        // updatedAccount.onerror = () => {
        //   console.log("error updating selected account");
        // };
      }
    };
  };
}
