import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <input
        value={inputValue}
        onChange={handleInputChange}
        name="Name"
        id="name"
        placeholder="Enter your name"
      />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input With Button', () => {
  it('should render component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });

  it('should properly handles input change', () => {
    render(<InputWithButton />);
    const button = screen.getByText('Submit');
    expect(button.disabled).toBeTruthy();
    const input = screen.getByPlaceholderText('Enter your name');
    fireEvent.change(input, { target: { value: 'DDD' } });
    expect(input.value).toBe('DDD');
    expect(button.disabled).toBeFalsy();
  });
});
