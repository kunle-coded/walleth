export default async function selectAccount(selected: string) {
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
        const internalAccount = result.AccountController.internalAccount;
        const { accounts } = internalAccount;

        for (const [key, value] of Object.entries(accounts) as [
          string,
          { id: string }
        ][]) {
          if (key === selected) {
            if (key === value.id) {
              result.AccountController.internalAccount.selectedAccount =
                value.id;
            }
          }
        }

        const updatedAccount = store.put(result);

        updatedAccount.onsuccess = () => {
          window.dispatchEvent(new Event("indexedDB_updated"));
        };
        updatedAccount.onerror = () => {
          console.log("error updating selected account");
        };
      }
    };
  };
}
