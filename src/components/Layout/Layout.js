import { Link, Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <StyledLink to="/">Home</StyledLink>
        <Link to="/movies">Movies</Link>
      </StyledHeader>
      <Outlet />
    </>
  );
}
