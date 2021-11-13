import React from 'react';
import { Wrapper, Logo, Menu, StyledLink } from './Navigation.styles';
import { useAuth } from 'hooks/useAuth';

const Navigation = ({ theme }) => {
  const auth = useAuth();
  return (
    <Wrapper>
      <Logo>
        Study
        <br />
        Buddy
      </Logo>
      <Menu>
        <StyledLink to="/" exact={true}>
          Dashboard
        </StyledLink>
        <StyledLink to="/add-user">Add User</StyledLink>
        <StyledLink to="/notes">Notes</StyledLink>
        <StyledLink as="a" onClick={auth.signOut}>
          Logout
        </StyledLink>
      </Menu>
    </Wrapper>
  );
};

export default Navigation;
