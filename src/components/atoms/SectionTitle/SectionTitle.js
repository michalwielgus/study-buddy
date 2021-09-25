import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0;
  line-height: 1;
`;
