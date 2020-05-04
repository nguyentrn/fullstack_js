import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.div`
  padding: 0.5rem 2rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.dark};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  color: ${(props) => props.theme.light};
`;

export { NavbarContainer, StyledNavLink };
