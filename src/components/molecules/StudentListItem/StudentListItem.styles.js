import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 24px 0;
  cursor: pointer;

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
