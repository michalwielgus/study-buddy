import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: relative;
`;
