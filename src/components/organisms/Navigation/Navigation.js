import React from 'react';
import { Wrapper, Logo, Menu, StyledLink } from './Navigation.styles';

const Navigation = ({ theme }) => {
  return (
    <Wrapper>
      <Logo>
        Study
        <br />
        Buddy
      </Logo>
      <Menu>
        <StyledLink to="/" activeClassName="active" exact={true}>
          Dashboard
        </StyledLink>
        <StyledLink to="/add-user" activeClassName="active">
          Add User
        </StyledLink>
      </Menu>
    </Wrapper>
  );
};

export default Navigation;
