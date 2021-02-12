import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: ${({ themes }) => theme.colors.lightGrey};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
