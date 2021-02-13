import React from 'react';

import {
  Container,
  NavbarContainer,
  LeftButtonContainer,
  LeftButtonIcon,
  LeftButtonText,
} from './styles';

const Navbar = () => (
  <Container>
    <NavbarContainer>
      <LeftButtonContainer to="/">
        <LeftButtonIcon />
        <LeftButtonText>Back</LeftButtonText>
      </LeftButtonContainer>
    </NavbarContainer>
  </Container>
);

export default Navbar;
