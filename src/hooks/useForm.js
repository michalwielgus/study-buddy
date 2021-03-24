import { useReducer } from 'react';

export const useForm = (initialFormState) => {
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

  const [formState, dispatch] = useReducer(reducer, initialFormState);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.CHANGE_VALUE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleFormReset = () => {
    dispatch({ type: actionTypes.RESET });
  };

  const handleErrorsChange = (errorData) => {
    dispatch({
      type: actionTypes.ERROR,
      payload: errorData,
    });
  };

  const handleConsentToggle = () => {
    dispatch({ type: 'CONSENT_TOGGLE' });
  };

  return [
    formState,
    handleInputChange,
    handleFormReset,
    handleErrorsChange,
    handleConsentToggle,
  ];
};
