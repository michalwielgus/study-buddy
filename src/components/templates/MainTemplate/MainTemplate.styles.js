import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 85px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
