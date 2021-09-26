import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ViewHead } from 'components/molecules/ViewHead/ViewHead';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import StudentList from 'components/organisms/StudentList/StudentList';
import GroupSelector from 'components/organisms/GroupSelector/GroupSelector';
import useModal from 'components/organisms/Modal/useModal';
import { useStudents } from 'hooks/useStudents';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const { groupId } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentStudent, setCurrentStudent] = useState(0);
  const { getStudentById } = useStudents();

  const handleOpenStudentDetails = async (studentId) => {
    const student = await getStudentById(studentId);
    setCurrentStudent(student);
    handleOpenModal();
  };

  return (
    <>
      <ViewHead>
        <Title>{groupId ? `Group ${groupId}` : 'All students'}</Title>
        <GroupSelector />
      </ViewHead>
      <ViewWrapper>
        <StudentList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? (
          <Modal handleClose={handleCloseModal}>
            <StudentDetails student={currentStudent}></StudentDetails>
          </Modal>
        ) : null}
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
