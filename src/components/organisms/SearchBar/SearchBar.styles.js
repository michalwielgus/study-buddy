import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-bottom: solid 1px ${({ theme }) => theme.colors.lineGrey};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StatusInfo = styled.div`
  padding: 0 25px;
`;

export const SectionTitle = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 20px;
  margin: 0;
  line-height: 1;
`;

export const SearchBarInput = styled.input`
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 15px 28px;
  margin: 0 25px;
  width: 100%;
  max-width: 470px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderGrey};
  }

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
