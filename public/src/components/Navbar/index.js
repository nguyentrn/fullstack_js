import React from 'react';
import { NavbarContainer, StyledNavLink } from './style';

const Navbar = (props) => {
  return (
    <NavbarContainer>
      {props.types.map((type) => (
        <StyledNavLink to={`/${type}`}>
          Danh sach {type}
        </StyledNavLink>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
