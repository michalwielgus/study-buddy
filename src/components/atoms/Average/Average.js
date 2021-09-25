import styled from 'styled-components';

export const Average = styled.div`
  width: ${({ isBig }) => (isBig ? '68px' : '34px')};
  height: ${({ isBig }) => (isBig ? '68px' : '34px')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, average }) => {
    if (!average) return theme.colors.grey;
    if (average > 4) return theme.colors.success;
    if (average < 3) return theme.colors.error;
    if (average <= 4 && average >= 3) return theme.colors.warning;
  }};
`;
