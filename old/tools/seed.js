const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  writeBatch,
  query,
  addDoc,
  getDocs,
  collection,
} = require('firebase/firestore');
const config = require('./config');

async function seed(name, data, clearCollection = true) {
  initializeApp(config);

  const database = getFirestore();
  const collectionRef = collection(database, name);

  if (clearCollection) {
    const docs = await getDocs(query(collectionRef));
    const batch = writeBatch(database);

    docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    console.log('🗑️   Collection cleared');
  }

  const tasks = data.map(object => addDoc(collectionRef, object));
  await Promise.all(tasks);

  console.log('🚀  Data uploaded');
}

module.exports = seed;
