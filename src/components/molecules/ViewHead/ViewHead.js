import styled from 'styled-components';

export const ViewHead = styled.div`
  width: 100%;
  max-width: ${({ isWide }) => (isWide ? '1000px' : '500px')};
  margin: 0 0 50px 0;
  position: relative;
`;
