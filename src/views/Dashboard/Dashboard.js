import React from 'react';
import { ViewHead, Title } from 'components/molecules/ViewHead/ViewHead';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const AddUser = ({ deleteUser, users }) => {
  return (
    <>
      <ViewHead>
        <Title>Students List</Title>
      </ViewHead>
      <ViewWrapper>
        <UsersList deleteUser={deleteUser} users={users} />
      </ViewWrapper>
    </>
  );
};

export default AddUser;
