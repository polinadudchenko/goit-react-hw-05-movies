import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { NavItem, NavList, StyledHeader } from './Layout.styled';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer autoClose={3000} />
    </>
  );
}
