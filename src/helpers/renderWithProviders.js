import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import UsersProvider from 'providers/UsersProvider';
import { theme } from 'assets/styles/theme';

const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <UsersProvider>{children}</UsersProvider>
    </ThemeProvider>
  );
};

export default renderWithProviders;
