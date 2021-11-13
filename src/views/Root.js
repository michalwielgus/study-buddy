import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import Dashboard from 'views/Dashboard/Dashboard';
import AddUser from 'views/AddUser/AddUser';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { ItemMeta } from 'components/atoms/ItemMeta/ItemMeta';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import Notes from './Notes/Notes';

const AuthenticatedApp = () => (
  <MainTemplate>
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/group" />
        </Route>
        <Route path="/add-user">
          <AddUser />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/group/:groupId?">
          <Dashboard />
        </Route>
      </Switch>
    </Wrapper>
  </MainTemplate>
);

const UnauthenticatedApp = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#F7F8FA',
      }}
    >
      <form
        onSubmit={handleSubmit(auth.signIn)}
        style={{
          boxShadow: '-2px 4px 10px rgba(115, 124, 142, 0.09)',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '35px 60px 60px',
        }}
      >
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
      </form>
    </div>
  );
};

const Root = () => {
  const auth = useAuth();
  const { error } = useError();
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
