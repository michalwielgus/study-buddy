import React from 'react';
import { StyledButton } from './Button.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Button = (props) => {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
