import styled from 'styled-components';

export const NewsWrapper = styled.div`
  grid-column: 3 / 3;
  grid-row: 1 / 3;
  border-left: solid 1px ${({ theme }) => theme.colors.lineGrey};
  padding: 31px 43px;
`;
