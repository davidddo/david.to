const firebase = require('firebase/app');
require('firebase/firestore');

const config = require('./config');
const experiences = require('../data/experiences.json');

const seedWork = async () => {
  firebase.initializeApp(config);

  const database = firebase.firestore();
  const batch = database.batch();

  experiences.forEach(experience => {
    batch.set(database.collection('experiences').doc(), experience);
  });

  batch.commit();
};

seedWork();
