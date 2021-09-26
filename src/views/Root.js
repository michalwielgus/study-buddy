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
      }}
    >
      <form onSubmit={handleSubmit(auth.signIn)}>
        <FormField
          id="login"
          name="login"
          label="login"
          {...register('login', { required: true })}
        />
        {errors.login && <ItemMeta isDanger>Login is required</ItemMeta>}
        <FormField
          id="password"
          name="password"
          label="password"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <ItemMeta isDanger>Password is required</ItemMeta>}
        <Button type="submit" isBig isCentered>
          Sign in
        </Button>
      </form>
    </div>
  );
};

const Root = () => {
  const auth = useAuth();
  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
