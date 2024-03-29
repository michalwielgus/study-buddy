import styled from 'styled-components';

const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  width: ${({ type }) =>
    type === 'checkbox' || type === 'radio' ? 'auto' : '100%'};
  height: ${({ type, isTextarea }) =>
    type === 'checkbox' || type === 'radio'
      ? 'auto'
      : isTextarea
      ? '250px'
      : '35px'};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderGrey};
  }
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export default Input;
