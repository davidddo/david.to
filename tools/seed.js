const argv = require('minimist')(process.argv.slice(2));

const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  writeBatch,
  addDoc,
  collection,
} = require('firebase/firestore');
const config = require('./config');

async function seed() {
  initializeApp(config);

  const database = getFirestore();

  const data = require(argv.data);
  data.forEach(async object => {
    await addDoc(collection(database, argv.collection), object);
  });
}

seed();
