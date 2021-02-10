import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <buttton>X</buttton>
    </li>
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
