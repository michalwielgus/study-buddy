import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';
import { Wrapper } from './FormField.styles';

const FormField = ({ value, onChange, label, name, id, type, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      ></Input>
    </Wrapper>
  );
};

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
