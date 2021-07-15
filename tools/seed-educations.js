const firebase = require('firebase/app');
require('firebase/firestore');

const config = require('./config');
const educations = require('../data/educations.json');

const seedEducations = async () => {
  firebase.initializeApp(config);

  const database = firebase.firestore();
  const batch = database.batch();

  educations.forEach(education => {
    batch.set(database.collection('educations').doc(), education);
  });

  batch.commit();
};

seedEducations();
