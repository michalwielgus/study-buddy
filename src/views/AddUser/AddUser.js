import React from 'react';
import { ViewHead, Title } from 'components/molecules/ViewHead/ViewHead';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <ViewHead>
        <Title>Add new student</Title>
      </ViewHead>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};

export default AddUser;