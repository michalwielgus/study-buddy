import React from 'react';
import { ViewHead, Title } from 'components/molecules/ViewHead/ViewHead';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const AddUser = () => {
  return (
    <>
      <ViewHead>
        <Title>Students List</Title>
      </ViewHead>
      <ViewWrapper>
        <UsersList />
      </ViewWrapper>
    </>
  );
};

export default AddUser;
