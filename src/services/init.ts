import { Session } from "../types/config";

export default async function init() {
  const sessionDBRequest = indexedDB.open("PUDWDB", 1);

  sessionDBRequest.onerror = (event) => {
    const error = (event.target as IDBRequest).error;
    console.log(error?.message);
  };

  sessionDBRequest.onupgradeneeded = (event) => {
    const db = (event.target as IDBOpenDBRequest).result;

    if (!db.objectStoreNames.contains("PUDWDB")) {
      db.createObjectStore("PUDWDB", { keyPath: "id" });
    }
  };

  sessionDBRequest.onsuccess = (event) => {
    const db = (event.target as IDBOpenDBRequest).result;
    // if (db.objectStoreNames.contains("PUDWDB")) {
    //   console.log("ABORT MISSION!");
    //   return;
    // }
    const transaction = db.transaction("PUDWDB", "readwrite");
    const store = transaction.objectStore("PUDWDB");

    const getSessionRequest = store.get("session");
    const getConfigRequest = store.get("config");

    const sessionPUDWDBData: Session = {
      id: "session",
      isFirstWallethSetup: true,
      timestamp: Date.now(),
    };

    getSessionRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).error;
      console.log("getSessionRequest error", error?.message);
    };

    getSessionRequest.onsuccess = () => {
      if (!getSessionRequest.result) {
        store.add(sessionPUDWDBData);
      }
    };

    getConfigRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).error;
      console.log("getConfigRequest error", error?.message);
    };

    getConfigRequest.onsuccess = (event) => {
      const result = (event.target as IDBRequest).result;
      console.log("config result", result);
      if (!result) {
        console.log("no config yet", result);
        const config = {
          id: "config",
        };
        store.add(config);
      }
    };
  };
}
