import React from 'react';

import Navbar from '../../components/Navbar';

import { Container, Warning } from './styles';

const Minefield = () => (
  <>
    <Navbar />
    <Container>
      <Warning>Game under construction!</Warning>
    </Container>
  </>
);

export default Minefield;
