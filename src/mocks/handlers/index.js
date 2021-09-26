import { rest } from 'msw';
import { db } from 'mocks/db';

const handlers = [
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

  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = req.body.searchPhrase
      ? db.student.findMany({
          where: {
            name: {
              contains: req.body.searchPhrase,
            },
          },
        })
      : [];
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),

  rest.get('/students/:studentId', (req, res, ctx) => {
    const matchingStudent = db.student.findFirst({
      where: {
        id: {
          equals: req.params.studentId,
        },
      },
    });

    if (!matchingStudent) {
      return res(ctx.status(404), ctx.json({ error: 'No student found' }));
    }

    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudent,
      })
    );
  }),
];

export default handlers;
