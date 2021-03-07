import styled from 'styled-components';

export const ViewHead = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 50px auto;
`;

export const Title = styled.h1`
  line-height: 112.7%;
  font-size: 30px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 100%;
  max-width: 500px;
  margin: 0;
`;
