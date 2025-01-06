const { Timestamp } = require('firebase/firestore');
const seed = require('./seed');

const experiences = [
  {
    type: 'Working Student',
    company: 'MHP Management- und IT-Beratung',
    description: '',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/logos%2Fmhp.png?alt=media&token=d84c033e-c129-4d23-a6b1-2346745d0e52',
    position: 1,
    dateRange: {
      start: Timestamp.fromMillis(1584226800000),
      current: true,
    },
    sections: [
      {
        position: 'Working Student',
        dateRange: {
          start: Timestamp.fromMillis(1598911200000),
          current: true,
        },
      },
      {
        position: 'Internship',
        dateRange: {
          start: Timestamp.fromMillis(1584226800000),
          end: Timestamp.fromMillis(1598911200000),
        },
      },
    ],
  },
  {
    type: 'Working Student',
    company: 'Benchkram Software GmbH',
    description: 'Build a cross platform prototype for plyd.io',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/logos%2Fbenchkram.png?alt=media&token=f0382bc4-8084-415e-b88c-a94834b6b95b',
    position: 2,
    dateRange: {
      start: Timestamp.fromMillis(1572562800000),
      end: Timestamp.fromMillis(1548975600000),
    },
  },
  {
    type: 'Research Assistant',
    company: 'Hochschule der Medien Stuttgart',
    description: 'Content-Management with Zope',
    img: 'https://firebasestorage.googleapis.com/v0/b/david-tomschitz.appspot.com/o/logos%2Fhdm.png?alt=media&token=824b1254-46f1-4a7e-a7f6-5a48f370103e',
    position: 3,
    dateRange: {
      start: Timestamp.fromMillis(1541026800000),
      end: Timestamp.fromMillis(1548975600000),
    },
  },
];

seed('experiences', experiences);
