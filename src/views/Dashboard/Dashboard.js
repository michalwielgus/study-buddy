import React from 'react';
import { useParams } from 'react-router-dom';
import { ViewHead, Title } from 'components/molecules/ViewHead/ViewHead';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import StudentList from 'components/organisms/StudentList/StudentList';
import GroupSelector from 'components/organisms/GroupSelector/GroupSelector';

const Dashboard = () => {
  const { id } = useParams();

  return (
    <>
      <ViewHead>
        <Title>{id ? `Group ${id}` : 'All students'}</Title>
        <GroupSelector />
      </ViewHead>
      <ViewWrapper>
        <StudentList />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
