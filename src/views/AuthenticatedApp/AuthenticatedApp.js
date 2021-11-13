import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from 'views/Root.styles';
import Dashboard from 'views/Dashboard/Dashboard';
import Notes from 'views/Notes/Notes';

const AuthenticatedApp = () => (
  <MainTemplate>
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/group" />
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

export default AuthenticatedApp;
