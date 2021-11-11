const argv = require('minimist')(process.argv.slice(2));

const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  writeBatch,
  query,
  addDoc,
  deleteDoc,
  getDocs,
  collection,
} = require('firebase/firestore');
const config = require('./config');

async function seed() {
  initializeApp(config);

  const database = getFirestore();
  const collectionRef = collection(database, argv.collection);

  if (argv.clear) {
    const docs = await getDocs(query(collectionRef));
    const batch = writeBatch(database);

    docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    console.log('🗑️   Collection cleared');
  }

  const data = require(argv.data);
  const tasks = data.map(object => addDoc(collectionRef, object));
  await Promise.all(tasks);

  console.log('🚀  Data uploaded');
  process.exit(0);
}

seed();
