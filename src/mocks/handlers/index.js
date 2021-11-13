import { auth } from 'mocks/handlers/auth';
import { groups } from 'mocks/handlers/groups';
import { students } from 'mocks/handlers/students';
import { notes } from './notes';

const handlers = [...auth, ...groups, ...students, ...notes];

export default handlers;
