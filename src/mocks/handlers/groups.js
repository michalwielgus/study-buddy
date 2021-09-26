import { rest } from 'msw';
import { db } from 'mocks/db';

export const groups = [
  rest.get('/groups', (req, res, ctx) => {
    const groups = db.group.getAll();

    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/groups/:groupId', (req, res, ctx) => {
    if (req.params.groupId !== 'all') {
      const matchingStudents = db.student.findMany({
        where: {
          group: {
            equals: req.params.groupId,
          },
        },
      });

      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }
    return res(ctx.status(200), ctx.json({ students: db.student.getAll() }));
  }),
];
