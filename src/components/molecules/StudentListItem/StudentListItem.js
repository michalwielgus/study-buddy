import React from 'react';
import {
  Wrapper,
  Name,
  Attendance,
  Person,
  Average,
} from './StudentListItem.styles';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const StudentListItem = ({
  userData: { name, average, attendance = '0%' },
}) => {
  return (
    <Wrapper>
      <Average average={average}>{average}</Average>
      <Person>
        <Name>{name}</Name>
        <Attendance>attendance: {attendance}</Attendance>
      </Person>
      <DeleteButton />
    </Wrapper>
  );
};

StudentListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentListItem;
