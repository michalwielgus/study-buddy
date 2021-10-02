import styled from 'styled-components';

export const ItemMeta = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  ${({ isError }) =>
    isError
      ? `color: ${({ theme }) =>
          theme.colors.error}; text-align: center; margin-top: 10px;`
      : ''};
`;
