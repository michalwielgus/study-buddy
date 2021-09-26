import { factory, primaryKey } from '@mswjs/data';
import { groups } from 'mocks/data/groups';
import { eventTypes } from 'mocks/data/eventTypes';
import faker from 'faker';

faker.seed(123);

const getRandomValue = (array, index) => array[index];
const getRandomAverage = () =>
  faker.datatype.number({ min: 2, max: 5, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => faker.datatype.number({ min: 0, max: 100 }),
    average: getRandomAverage,
    group: () =>
      getRandomValue(groups, faker.datatype.number({ min: 0, max: 5 })),
    course: () => faker.fake('{{random.word}} {{random.word}}'),
    subjects: () => [
      {
        name: 'Math',
        grade: getRandomAverage(),
      },
      {
        name: 'Economy',
        grade: getRandomAverage(),
      },
      {
        name: 'Marketing',
        grade: getRandomAverage(),
      },
    ],
  },
  group: {
    id: primaryKey(String),
  },
  event: {
    id: primaryKey(faker.datatype.uuid),
    type: () =>
      getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
    group: () =>
      getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    date: faker.date.soon,
  },
});
