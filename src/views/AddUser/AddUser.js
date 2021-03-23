import React, { useContext, useReducer } from 'react';
import { ViewHead, Title } from 'components/molecules/ViewHead/ViewHead';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  errors: {},
};

const actionTypes = {
  CHANGE_VALUE: 'CHANGE_VALUE',
  CONSENT_TOGGLE: 'CONSENT_TOGGLE',
  ERROR: 'ERROR',
  RESET: 'RESET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VALUE:
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    case actionTypes.CONSENT_TOGGLE:
      return { ...state, consent: !state.consent };
    case actionTypes.ERROR:
      const { errorField, errorMessage } = action.payload;
      return {
        ...state,
        errors: { ...state.errors, [errorField]: errorMessage },
      };
    case actionTypes.RESET:
      return initialFormState;
    default:
      throw new Error();
  }
};

const AddUser = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.CHANGE_VALUE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formState.consent) {
      handleAddUser(formState);
      dispatch({ type: actionTypes.RESET });
      dispatch({
        type: actionTypes.ERROR,
        payload: {
          errorField: 'consent',
          errorMessage: false,
        },
      });
    } else {
      dispatch({
        type: actionTypes.ERROR,
        payload: {
          errorField: 'consent',
          errorMessage: 'You must accept consent',
        },
      });
    }
    console.log(formState.errors);
  };

  return (
    <>
      <ViewHead>
        <Title>Add new student</Title>
      </ViewHead>
      <ViewWrapper as="form" onSubmit={handleSubmitUser}>
        <FormField
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
          onChange={() => dispatch({ type: 'CONSENT_TOGGLE' })}
        />
        {formState.errors.consent ? <p>{formState.errors.consent}</p> : ''}
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};

export default AddUser;
