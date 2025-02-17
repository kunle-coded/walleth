export default function getNewUserStatus(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("PUDWDB", 1);

    dbRequest.onerror = (error) => {
      console.log(
        `Error connecting to database: `,
        (error.target as IDBOpenDBRequest).error?.message
      );
      // reject("Error connecting to database:");
      reject(true);
    };

    dbRequest.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // if (db.objectStoreNames.contains("PUDWDB")) {
      //   console.log("ABORT MISSION!");
      //   const noUser = true;
      //   reject(noUser);
      //   return;
      // }

      const transaction = db.transaction("PUDWDB", "readonly");
      const store = transaction.objectStore("PUDWDB");

      const getSessionStore = store.get("session");

      getSessionStore.onsuccess = (event) => {
        const result = (event.target as IDBRequest).result;

        if (result) {
          const { isFirstWallethSetup } = result;
          resolve(isFirstWallethSetup);
        } else {
          reject(true);
        }
      };

      getSessionStore.onerror = () => {
        // setIsNewUser(true);
        console.log("Error fetching user info: ");
        reject(true);
      };
    };
  });
}
