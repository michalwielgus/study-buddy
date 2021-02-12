import React from 'react';
import { Wrapper, List } from './UsersList.styles';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <Wrapper>
      <List>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </List>
    </Wrapper>
  );
};

export default UsersList;
