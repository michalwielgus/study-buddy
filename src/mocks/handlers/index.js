import { auth } from 'mocks/handlers/auth';
import { groups } from 'mocks/handlers/groups';
import { students } from 'mocks/handlers/students';

const handlers = [...auth, ...groups, ...students];

export default handlers;
