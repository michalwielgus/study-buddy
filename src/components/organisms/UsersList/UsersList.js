import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { List } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <List>
        {users.map((userData) => (
          <UsersListItem
            deleteUser={deleteUser}
            key={userData.name}
            userData={userData}
          />
        ))}
      </List>
    </>
  );
};

export default UsersList;
