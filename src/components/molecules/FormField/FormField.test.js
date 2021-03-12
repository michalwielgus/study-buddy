import React from 'react';
import FormField from './FormField';
import renderWithThemeProvider from 'helpers/renderWithProviders';

describe('Input With Button', () => {
  it('should render the component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
