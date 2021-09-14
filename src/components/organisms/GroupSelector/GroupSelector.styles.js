import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledGroupList = styled.nav`
  position: absolute;
  right: 0;
  background-color: black;
  border-radius: 5px;
  padding: 12px 24px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  z-index: 99;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${({ theme }) => theme.colors.white};
  padding: 5px;

  &:not(:last-child) {
    border-bottom: solid 1px ${({ theme }) => theme.colors.darkGrey};
  }
`;
