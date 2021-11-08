import React from 'react';
import FormField from './FormField';
import { render } from 'testUtils';

describe('Input', () => {
  it('should render the component', () => {
    render(<FormField label="name" name="name" id="name" />);
  });
});
