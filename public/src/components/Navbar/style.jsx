import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.div`
  height: 5rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
  color: #ffffff;
  margin: 1rem;
`;

export { NavbarContainer, StyledNavLink };
