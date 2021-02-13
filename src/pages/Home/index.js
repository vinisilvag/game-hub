import React from 'react';

import { Container, TicTacToeButton, MinefieldButton } from './styles';

const Home = () => (
  <Container>
    <TicTacToeButton to="/tic-tac-toe">Tic Tac Toe</TicTacToeButton>
    <MinefieldButton to="/minefield">Minefield</MinefieldButton>
  </Container>
);

export default Home;
