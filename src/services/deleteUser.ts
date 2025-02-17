export default function deleteUser() {
  // WALLETHDB PUDWDB
  const deleteRequest1 = indexedDB.deleteDatabase("PUDWDB");
  const deleteRequest = indexedDB.deleteDatabase("WALLETHDB");

  deleteRequest1.onsuccess = () => {
    console.log("Database deleted successfully!");
  };

  deleteRequest1.onerror = () => {
    console.error("Failed to delete database!");
  };

  deleteRequest.onsuccess = () => {
    console.log("Database deleted successfully!");
  };

  deleteRequest.onerror = () => {
    console.error("Failed to delete database!");
  };
}
