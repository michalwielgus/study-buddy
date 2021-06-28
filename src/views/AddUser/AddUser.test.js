import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from 'views/Dashboard/Dashboard';
import renderWithProviders from 'helpers/renderWithProviders';

describe('Input With Button', () => {
  it('should render the component', () => {
    renderWithProviders(<AddUser />);
  });

  it('should add new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    const nameField = screen.getByTestId('Name');
    const attendanceField = screen.getByTestId('Attendance');
    const averageField = screen.getByTestId('Average');
    const addButton = screen.getByText('Add');
    const consentButton = screen.getByText('Consent');

    fireEvent.change(nameField, { target: { value: 'Michał' } });
    fireEvent.change(attendanceField, { target: { value: '25%' } });
    fireEvent.change(averageField, { target: { value: '4.5' } });

    expect(nameField.value).toBe('Michał');
    expect(attendanceField.value).toBe('25%');
    expect(averageField.value).toBe('4.5');

    fireEvent.click(consentButton);
    fireEvent.click(addButton);
    const user = screen.getByText('Michał');
    expect(user).toBeTruthy();
  });

  it('should prevent add new user to the list if consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    const nameField = screen.getByTestId('Name');
    const attendanceField = screen.getByTestId('Attendance');
    const averageField = screen.getByTestId('Average');
    const addButton = screen.getByText('Add');

    fireEvent.change(nameField, { target: { value: 'Stefano' } });
    fireEvent.change(attendanceField, { target: { value: '25%' } });
    fireEvent.change(averageField, { target: { value: '4.5' } });
    fireEvent.click(addButton);
    const user = screen.queryByText('Stefano');
    expect(user).toBeFalsy();
  });
});
