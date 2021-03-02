import React, { useState, useEffect } from 'react';
import { Wrapper, List } from './UsersList.styles';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UserList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const deleteUser = (name) => {
    const filtredUsers = users.filter((user) => user.name !== name);
    console.log(filtredUsers);
    setUsers(filtredUsers);
  };

  useEffect(() => {
    mockAPI()
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    console.log('rerender');
  }, []);
  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <List>
        {users.map((userData) => (
          <UsersListItem
            key={userData.name}
            userData={userData}
            deleteUser={deleteUser}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default UserList;
