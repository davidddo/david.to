const { Timestamp } = require('firebase/firestore');
const seed = require('./seed');

const projects = [
  {
    name: 'SV Vaihingen Handball',
    subtitle:
      'The Website and API of the Handball club SV-Vaihingen, aswell as a custom tailored Content-Mangement-System',
    technologies: ['Angular', 'NestJS', 'MongoDB'],
    color: 'Red',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/projects%2Fsvv.png?alt=media&token=f1f00cef-b65e-4503-b2a0-93f912343098',
    url: 'https://github.com/davidddo/svv-handball',
    position: 1,
  },
  {
    name: 'Bucket Map',
    subtitle:
      'A IOS and Android app that enables the user to unlock new countries and save favorite places that they might want to visit again at some point',
    technologies: ['Flutter', 'Firebase'],
    color: 'Grey',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/projects%2Fbucket_map.png?alt=media&token=c4feca20-4623-4694-886d-bc0f29da0912',
    url: 'https://github.com/davidddo/bucket-map',
    position: 2,
  },
  {
    name: 'Bar Brawler',
    subtitle:
      'A brawler game in which the player tries to survive waves of enemies in a saloon by buying new weapons and having a drink at the bar',
    technologies: ['Unity', 'Blender'],
    color: 'Brown',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/projects%2Fbarbrawler.png?alt=media&token=a7e588cd-33e7-48f4-a605-9360fb3fbca2',
    url: 'https://github.com/davidddo/bar-brawler',
    position: 3,
  },
  {
    name: 'Bingo App',
    subtitle:
      'A student project with the goal of creating a bingo web app using React and Deno',
    technologies: ['React', 'Deno', 'GraphQL', 'MongoDB'],
    color: 'Indigo',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/projects%2Fbingo.png?alt=media&token=be1d4544-6577-4692-9b84-b93270ce1525',
    url: 'https://github.com/davidddo/bingo-app',
    position: 4,
  },
  {
    name: 'Weather App',
    subtitle:
      'A student project with the goal of creating a Weather App for Android using only a specific set of libraries',
    technologies: ['Android'],
    color: 'Yellow',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/projects%2Fweatherapp.png?alt=media&token=9d8d2efe-605f-4f30-ab65-a0e5aad5a0b2',
    url: 'https://github.com/davidddo/weather-app',
    position: 5,
  },
  {
    name: 'Space Invaders',
    subtitle:
      'A VR game in which the player has to shoot down as many enemies as possible and at the same time not suffer too much damage by tactically using a protective shield',
    technologies: ['Unity', 'Blender'],
    color: 'Teal',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/projects%2Fspace_invaders.png?alt=media&token=02ed27f6-1867-4545-8c4f-02e8bc07cbf2',
    url: 'https://github.com/davidddo/space-invaders-vr',
    position: 6,
  },
];

seed('projects', projects);
