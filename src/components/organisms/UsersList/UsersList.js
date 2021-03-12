import React, { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { List } from './UsersList.styles';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <List>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </List>
    </>
  );
};

export default UsersList;
