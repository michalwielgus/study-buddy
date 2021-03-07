import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonGrey};
  border: none;
  border-radius: 96.94px;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 9px 64px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: auto;
  display: block;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`;

export default Button;
