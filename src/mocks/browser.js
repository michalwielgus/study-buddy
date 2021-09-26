import { setupWorker } from 'msw';
import handlers from 'mocks/handlers';
import { db } from 'mocks/db';
import { groups } from 'mocks/data/groups';
import { teachers } from 'mocks/data/teachers';

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

const createTeachers = () => {
  for (let teacher of teachers) {
    db.teacher.create({
      id: teacher.id,
      name: teacher.name,
      login: teacher.login,
      password: teacher.password,
    });
  }
};

createStudents();
createGroups();
createTeachers();

window.mocks = {
  createStudents,
  getStudents: () => db.student.getAll(),
  createGroups,
  getGroups: () => db.group.getAll(),
  createTeachers,
  getTeachers: () => db.teacher.getAll(),
};

export default worker;
