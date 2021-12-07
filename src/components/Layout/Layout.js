import { NavLink, Outlet } from 'react-router-dom';
import { NavItem, NavList, StyledHeader } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movies">Movies</NavLink>
          </NavItem>
        </NavList>
      </StyledHeader>
      <Outlet />
    </>
  );
}
