import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  padding: 20px;
  margin-bottom: 40px;

  text-align: center;
  background-color: #414141;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  font-size: 24px;
  color: #000;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const NavigationLink = styled(NavLink)`
  color: #fff;

  &:hover {
    color: #f19816;
  }
`;

export { StyledHeader, NavList, NavItem, NavigationLink };
