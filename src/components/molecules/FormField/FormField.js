import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';
import { Wrapper } from './FormField.styles';

const FormField = forwardRef(
  ({ value, onChange, label, name, id, type, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input
          name={name}
          id={id}
          type={type}
          value={value}
          checked={value}
          onChange={onChange}
          data-testid={label}
          ref={ref}
        ></Input>
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
