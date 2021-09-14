import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-bottom: solid 1px ${({ theme }) => theme.colors.lineGrey};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
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

export const SearchResults = styled.ul`
  z-index: 1000;
  max-height: 500px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  ${({ isOpen, theme }) =>
    isOpen
      ? `
        background-color: ${theme.colors.white};
        box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  `
      : ''};
`;

export const SearchResultsItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 10px 5px;

  ${({ isHighlighted, theme }) =>
    isHighlighted
      ? `background-color: ${theme.colors.lightGrey};`
      : `${theme.colors.white}`}

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;
