import styled from 'styled-components';

export const ItemMeta = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ isDanger }) =>
    isDanger ? 'color: red; text-align: center; margin-top: 10px;' : ''};
`;
