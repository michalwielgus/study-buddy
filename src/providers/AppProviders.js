import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import { Provider } from 'react-redux';
import { store } from 'store';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <AuthProvider>
              <GlobalStyle />
              {children}
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;
