const { Timestamp } = require('firebase/firestore');
const seed = require('./seed');

const educations = [
  {
    name: 'Hochschule der Medien',
    type: 'B.Sc. Medieninformatik',
    logo: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/logos%2Fhdm.png?alt=media&token=824b1254-46f1-4a7e-a7f6-5a48f370103e',
    position: 1,
    dateRange: {
      start: Timestamp.fromMillis(1521068400000),
      current: true,
    },
  },
  {
    name: 'IT.Schule Stuttgart',
    type: 'Technisches Berufskolleg',
    logo: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/logos%2Fits.png?alt=media&token=d296b259-eb96-4f92-b42d-134f285d8524',
    position: 2,
    dateRange: {
      start: Timestamp.fromMillis(1441058400000),
      end: Timestamp.fromMillis(1435701600000),
    },
  },
  {
    name: 'Rober-Koch-Realschule',
    type: 'Realschule',
    position: 3,
    dateRange: {
      start: Timestamp.fromMillis(1251756000000),
      end: Timestamp.fromMillis(1435701600000),
    },
  },
  {
    name: 'Pestalozzischule',
    type: 'Grundschule',
    position: 4,
    dateRange: {
      start: Timestamp.fromMillis(1125525600000),
      end: Timestamp.fromMillis(1246399200000),
    },
  },
];

seed('educations', educations);
