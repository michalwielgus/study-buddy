import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 19px 0;
  border-right: solid 1px ${({ theme }) => theme.colors.lineGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

export const Logo = styled.div`
  padding: 15px 24px 15px 44px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 15px;
`;

export const Menu = styled.div`
  margin-top: 50px;
  padding-right: 24px;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName: 'active' })`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 22px;
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 19px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.lineGrey};
    right: -24px;
    top: 5px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &.active:after {
    opacity: 1;
  }
`;
