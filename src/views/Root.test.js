import React from 'react';
import { render, screen, fireEvent, waitFor } from 'testUtils';
import Root from './Root';

describe('Root component', () => {
  it('should render the component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('should display error message when wrong credentals are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Test' } });
    fireEvent.change(password, { target: { value: 'Test' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('should display authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'wielgus.michaal@gmail.com' } });
    fireEvent.change(password, { target: { value: '1234' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Lonnie/));
  });
});
