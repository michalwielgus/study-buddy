import { setupWorker } from 'msw';
import handlers from 'mocks/handlers';
import { db } from 'mocks/db';
import { groups } from 'mocks/data/groups';
import { teachers } from 'mocks/data/teachers';

const worker = setupWorker(...handlers);

export const createStudents = () => {
  for (let i = 0; i < 125; i++) {
    db.student.create();
  }
};

export const createGroups = () => {
  for (let group of groups) {
    db.group.create({ id: group });
  }
};

export const createTeachers = () => {
  for (let teacher of teachers) {
    db.teacher.create({
      id: teacher.id,
      name: teacher.name,
      login: teacher.login,
      password: teacher.password,
    });
  }
};

export const createNotes = () => {
  for (let i = 0; i < 3; i++) {
    db.note.create();
  }
};

createStudents();
createGroups();
createTeachers();
createNotes();

window.mocks = {
  createStudents,
  getStudents: () => db.student.getAll(),
  createGroups,
  getGroups: () => db.group.getAll(),
  createTeachers,
  getTeachers: () => db.teacher.getAll(),
  createNotes,
  getNotes: () => db.note.getAll(),
};

export default worker;
