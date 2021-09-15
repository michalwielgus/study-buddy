import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonGrey};
  border: none;
  border-radius: 96.94px;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: block;
  margin-top: 25px;
  outline: none;
  cursor: pointer;

  ${({ isAbsolute }) =>
    isAbsolute && 'position: absolute; top: -25px; right: 0;'}
`;

export default Button;
