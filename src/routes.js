import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import Minefield from './pages/Minefield';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/tic-tac-toe" component={TicTacToe} />
      <Route path="/minefield" component={Minefield} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
