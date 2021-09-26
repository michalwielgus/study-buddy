import { setupWorker } from 'msw';
import handlers from 'mocks/handlers';
import { db } from 'mocks/db';
import { groups } from 'mocks/data/groups';

const worker = setupWorker(...handlers);

const createStudents = () => {
  for (let i = 0; i < 125; i++) {
    db.student.create();
  }
};

const createGroups = () => {
  for (let group of groups) {
    db.group.create({ id: group });
  }
};

createStudents();
createGroups();

window.mocks = {
  createStudents,
  getStudents: () => db.student.getAll(),
  createGroups,
  getGroups: () => db.group.getAll(),
};

export default worker;
