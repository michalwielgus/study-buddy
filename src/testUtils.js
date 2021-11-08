import React from 'react';
import { render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import { theme } from 'assets/styles/theme';

const AllTheProviders = ({ children }) => {
  return <AppProviders theme={theme}>{children}</AppProviders>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
