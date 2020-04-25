import { openDB } from 'idb';
import * as t from './constants';

const DB_NAME: string = 'ignitus';
const version: number = 1;

// eslint-disable-next-line no-async-promise-executor
const createDB = new Promise(async (resolve, reject) => {
  try {
    const dbPromise = await openDB(DB_NAME, version, {
      upgrade(db, oldVersion) {
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
    const db: any = await createDB;
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
    const db: any = await createDB;
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
    const db: any = await createDB;
    const tx = db.transaction(storeName);
    const store = tx.objectStore(storeName);
    return await store.get(key);
  } catch (err) {
    return new Promise(reject => reject(err));
  }
}
