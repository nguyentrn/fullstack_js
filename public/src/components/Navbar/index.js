import React from 'react';
import { NavbarContainer, StyledNavLink } from './style';

const Navbar = (props) => {
  return (
    <NavbarContainer>
      {props.types.map((type) => (
        <StyledNavLink key={type} to={`/${type}`}>
          {type.toUpperCase()}
        </StyledNavLink>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
