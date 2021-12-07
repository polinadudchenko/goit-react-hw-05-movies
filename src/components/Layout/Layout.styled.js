import styled from '@emotion/styled';

const StyledHeader = styled.header`
  padding: 20px;

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

export { StyledHeader, NavList, NavItem };
