import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),

  rest.get('/groups/:groupId', (req, res, ctx) => {
    if (req.params.groupId !== 'all') {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.groupId
      );

      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }
    return res(ctx.status(200), ctx.json({ students }));
  }),

  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = req.body.searchPhrase
      ? students.filter((student) =>
          student.name
            .toLowerCase()
            .includes(req.body.searchPhrase.toLowerCase())
        )
      : [];
    return res(
      ctx.status(200),
      ctx.json({
        students: matchingStudents,
      })
    );
  }),

  rest.get('/students/:studentId', (req, res, ctx) => {
    const matchingStudent = students.filter(
      (student) => student.id === req.params.studentId
    );

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
