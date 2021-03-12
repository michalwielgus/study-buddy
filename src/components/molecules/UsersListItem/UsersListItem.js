import React, { useContext } from 'react';
import {
  Wrapper,
  Name,
  Attendance,
  Person,
  Average,
} from './UsersListItem.styles';
import { UsersContext } from 'providers/UsersProvider';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <Average average={average}>{average}</Average>
      <Person>
        <Name>{name}</Name>
        <Attendance>attendance: {attendance}</Attendance>
      </Person>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
