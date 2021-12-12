import { Outlet } from 'react-router-dom';
import {
  NavItem,
  NavList,
  StyledHeader,
  NavigationLink,
} from './Layout.styled';
import { ToastContainer } from 'react-toastify';

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <NavList>
          <NavItem>
            <NavigationLink to="/">Home</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </NavItem>
        </NavList>
      </StyledHeader>
      <Outlet />
      <ToastContainer autoClose={3000} />
    </>
  );
}
