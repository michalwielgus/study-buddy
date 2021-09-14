import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  padding: 5px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
