import { openDB } from 'idb';

import * as t from './constants';

const DB_NAME = 'ignitus';
const version = 1;

const createDB = new Promise(async (resolve, reject) => {
  try {
    const dbPromise = await openDB(DB_NAME, version, {
      // eslint-disable-next-line no-unused-vars
      upgrade(db, oldVersion, newVersion, transaction) {
        // eslint-disable-next-line default-case
        switch (oldVersion) {
          case 0:
            db.createObjectStore(t.CONTRIBUTORS_STORE, {
              keyPath: 'user_id',
              autoIncrement: true,
            });
            db.createObjectStore(t.TESTIMONIALS_STORE, {
              keyPath: 'id',
              autoIncrement: true,
            });
            db.createObjectStore(t.COND_HEADERS_STORE, {
              keyPath: 'name',
            });
        }
      },
    });
    resolve(dbPromise);
  } catch (err) {
    reject(err);
  }
});

export async function updateDataInDB(storeName, array) {
  try {
    const db = await createDB;
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await store.clear();
    await array;
    return await Promise.all(array.map(data => store.put(data)));
  } catch (err) {
    return new Promise(reject => reject(err));
  }
}

export async function getDataFromDB(storeName) {
  try {
    const db = await createDB;
    const tx = db.transaction(storeName);
    const store = tx.objectStore(storeName);
    const data = await store.getAll();
    return data;
  } catch (err) {
    return new Promise(reject => reject(err));
  }
}

export async function getItemFromDB(storeName, key) {
  try {
    const db = await createDB;
    const tx = db.transaction(storeName);
    const store = tx.objectStore(storeName);
    return await store.get(key);
  } catch (err) {
    return new Promise(reject => reject(err));
  }
}
