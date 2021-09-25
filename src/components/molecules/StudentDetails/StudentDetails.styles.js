import styled from 'styled-components';

export const Summary = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const Details = styled.div`
  padding: 64px 32px;
  text-align: left;
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 20px 0 0 0;
`;

export const CourseName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: 0;
`;

export const GradeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const GradeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  text-align: left;
`;

export const Subject = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
