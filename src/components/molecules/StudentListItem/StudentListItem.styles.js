import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 24px 0;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lineGrey};
  }

  p {
    margin: 0;
  }
`;

export const Average = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, average }) => {
    if (!average) return theme.colors.grey;
    if (average > 4) return theme.colors.success;
    if (average < 3) return theme.colors.error;
    if (average <= 4 && average >= 3) return theme.colors.warning;
  }};
`;

export const Person = styled.div`
  padding: 0 24px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Attendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;
