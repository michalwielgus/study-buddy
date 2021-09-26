import { rest } from 'msw';
import { db } from 'mocks/db';

export const students = [
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
