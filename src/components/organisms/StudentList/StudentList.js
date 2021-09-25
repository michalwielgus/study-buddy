import React, { useEffect, useState } from 'react';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router-dom';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import { List } from './StudentList.styles';

const StudentList = ({ handleOpenStudentDetails }) => {
  const { groupId } = useParams();
  const [students, setStudents] = useState([]);
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(groupId);
      setStudents(students);
    })();
  }, [groupId, getStudentsByGroup]);
  return (
    <List>
      {students.map((studentData) => (
        <StudentListItem
          key={studentData.id}
          userData={studentData}
          onClick={() => handleOpenStudentDetails(studentData.id)}
        />
      ))}
    </List>
  );
};

export default StudentList;
