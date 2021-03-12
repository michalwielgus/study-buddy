import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from 'views/Dashboard/Dashboard';
import renderWithProviders from 'helpers/renderWithProviders';

describe('Input With Button', () => {
  it('should render the component', () => {
    renderWithProviders(<AddUser />);
  });

  it('should handle fields changes', () => {
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

    fireEvent.change(nameField, { target: { value: 'Michał' } });
    fireEvent.change(attendanceField, { target: { value: '25%' } });
    fireEvent.change(averageField, { target: { value: '4.5' } });

    expect(nameField.value).toBe('Michał');
    expect(attendanceField.value).toBe('25%');
    expect(averageField.value).toBe('4.5');

    fireEvent.click(addButton);
    const user = screen.getByText('Michał');
    expect(user).toBeTruthy();
  });
});
