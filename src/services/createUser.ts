// Create user profile

// User creates new account → Create wallet data → store user basic data.
// 1. User creates new account (password) - store user status to indexDB
// 2. Store user profile to indexDB

export default async function createUser(userData: object) {
  console.log("user profile created");

  const dbRequest = indexedDB.open("walletDB", 1);

  dbRequest.onupgradeneeded = (event) => {
    const db = (event.target as IDBOpenDBRequest).result;

    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("profiles", { keyPath: "id" });
    }
  };

  dbRequest.onsuccess = (event) => {
    const db = (event.target as IDBOpenDBRequest).result;
    const transaction = db.transaction("users", "readwrite");
    const store = transaction.objectStore("users");

    const getRequest = store.get(2);

    getRequest.onsuccess = () => {
      if (!getRequest.result) {
        store.add(userData);
      }
    };
  };

  dbRequest.onerror = (event) => {
    const error = (event.target as IDBRequest).error;
    console.log(error?.message);
    // localStorage.setItem("userStatus", "error_creating_account");
  };
}
