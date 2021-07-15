const firebase = require('firebase/app');
require('firebase/firestore');

const config = require('./config');
const projects = require('../data/projects.json');

const seedProjects = async () => {
  firebase.initializeApp(config);

  const database = firebase.firestore();
  const batch = database.batch();

  projects.forEach(project => {
    batch.set(database.collection('projects').doc(), project);
  });

  const result = await batch.commit();
  console.log(result);
};

seedProjects();
