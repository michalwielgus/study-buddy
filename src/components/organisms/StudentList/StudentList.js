import React from 'react';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router-dom';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import { List } from './StudentList.styles';

const StudentList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });
  return (
    <>
      <List>
        {students.map((studentData) => (
          <StudentListItem key={studentData.name} userData={studentData} />
        ))}
      </List>
    </>
  );
};

export default StudentList;
