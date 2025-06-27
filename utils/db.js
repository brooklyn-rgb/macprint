// utils/db.js
import { openDB } from 'idb';

const dbName = 'myAppDB';
const storeName = 'appData';

export async function initDB() {
  return openDB(dbName, 1, {
    upgrade(db) {
      db.createObjectStore(storeName);
    },
  });
}

export async function saveData(key, value) {
  const db = await initDB();
  return db.put(storeName, value, key);
}

export async function getData(key) {
  const db = await initDB();
  return db.get(storeName, key);
}