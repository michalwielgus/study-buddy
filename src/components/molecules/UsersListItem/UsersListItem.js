import React from 'react';
import {
  Wrapper,
  Name,
  Attendance,
  Person,
  Average,
} from './UsersListItem.styles';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const UsersListItem = ({
  userData: { name, average, attendance = '0%' },
  deleteUser,
}) => {
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
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
