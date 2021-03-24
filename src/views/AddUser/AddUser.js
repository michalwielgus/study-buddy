import React, { useContext, useRef, useEffect } from 'react';
import { ViewHead, Title } from 'components/molecules/ViewHead/ViewHead';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  errors: {},
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const [
    formState,
    handleInputChange,
    handleFormReset,
    handleErrorsChange,
    handleConsentToggle,
  ] = useForm(initialFormState);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formState.consent) {
      handleAddUser(formState);
      handleFormReset();
      handleErrorsChange({
        errorField: 'consent',
        errorMessage: false,
      });
    } else {
      handleErrorsChange({
        errorField: 'consent',
        errorMessage: 'You must accept consent',
      });
    }
  };
  return (
    <>
      <ViewHead>
        <Title>Add new student</Title>
      </ViewHead>
      <ViewWrapper as="form" onSubmit={handleSubmitUser}>
        <FormField
          ref={ref}
          label="Name"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          value={formState.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          value={formState.average}
          onChange={handleInputChange}
        />
        <FormField
          label="Consent"
          id="consent"
          name="consent"
          type="checkbox"
          value={formState.consent}
          onChange={() => handleConsentToggle()}
        />
        {formState.errors.consent ? <p>{formState.errors.consent}</p> : ''}
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};

export default AddUser;
