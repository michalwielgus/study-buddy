import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import handlers from 'mocks/handlers';
import { db } from 'mocks/db';
import { groups } from 'mocks/data/groups';
import { teachers } from 'mocks/data/teachers';

const server = setupServer(...handlers);

beforeAll(() => {
  for (let i = 0; i < 125; i++) {
    db.student.create();
  }

  for (let group of groups) {
    db.group.create({ id: group });
  }

  for (let teacher of teachers) {
    db.teacher.create({
      id: teacher.id,
      name: teacher.name,
      login: teacher.login,
      password: teacher.password,
    });
  }

  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
