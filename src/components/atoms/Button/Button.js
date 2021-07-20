import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonGrey};
  border: none;
  border-radius: 96.94px;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 9px 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: block;
  margin-top: 25px;
  outline: none;
  cursor: pointer;

  ${({ isAbsolute }) =>
    isAbsolute && 'position: absolute; top: -25px; right: 0;'}
`;

export default Button;
