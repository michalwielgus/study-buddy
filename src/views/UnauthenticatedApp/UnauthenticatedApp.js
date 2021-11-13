import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { ItemMeta } from 'components/atoms/ItemMeta/ItemMeta';
import { useAuth } from 'hooks/useAuth';
import { FormWrapper, Form } from './UnauthenticatedApp.styles';

const UnauthenticatedApp = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(auth.signIn)}>
        <FormField
          id="login"
          name="login"
          label="login"
          {...register('login', { required: true })}
        />
        {errors.login && <ItemMeta isError>Login is required</ItemMeta>}
        <FormField
          id="password"
          name="password"
          label="password"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <ItemMeta isError>Password is required</ItemMeta>}
        <Button type="submit" isBig isCentered>
          Sign in
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default UnauthenticatedApp;
