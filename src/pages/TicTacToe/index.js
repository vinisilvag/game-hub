/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';

import { Container, Title, GameBoard, Square, OIcon, XIcon } from './styles';

function getInitialState() {
  const state = {};

  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      state[`${i}-${j}`] = null;
    }
  }

  return state;
}

function getKeyFromIndex(index) {
  const i = Math.floor(index / 3);
  const j = index % 3;

  return `${i}-${j}`;
}

function getLabel(value) {
  if (!value) return null;

  return value > 0 ? <OIcon /> : <XIcon />;
}

function getWinner(values) {
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      const sumRow =
        values[`${i}-${j}`] + values[`${i}-${j + 1}`] + values[`${i}-${j + 2}`];

      if (sumRow === 3 || sumRow === -3) return sumRow;

      const sumCol =
        values[`${i}-${j}`] + values[`${i + 1}-${j}`] + values[`${i + 2}-${j}`];

      if (sumCol === 3 || sumCol === -3) return sumCol;

      const sumDiagonal =
        values[`${i}-${j}`] +
        values[`${i + 1}-${j + 1}`] +
        values[`${i + 2}-${j + 2}`];

      if (sumDiagonal === 3 || sumDiagonal === -3) return sumDiagonal;

      const sumReverseDiagonal =
        values[`${i}-${j}`] +
        values[`${i + 1}-${j - 1}`] +
        values[`${i + 2}-${j - 2}`];

      if (sumReverseDiagonal === 3 || sumReverseDiagonal === -3)
        return sumReverseDiagonal;
    }
  }

  return null;
}

const TicTacToe = () => {
  const [values, setValues] = useState(getInitialState);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  function resetGame() {
    setWinner(null);
    setValues(getInitialState);
    setPlayer(1);
  }

  const itsATie = Object.values(values).filter(Boolean).length === 9 && !winner;

  useEffect(() => {
    if (winner || itsATie) {
      if (winner) {
        alert(`O ganhador é o ${winner > 0 ? 'O' : 'X'}!`);
      } else {
        alert(`Houve um empate!`);
      }

      resetGame();
    }
  }, [winner, itsATie]);

  function handleClick(key) {
    if (winner || values[key]) return;

    const newValues = { ...values, [key]: player };

    setValues(newValues);

    setPlayer(player * -1);

    const newWinner = getWinner(newValues);

    if (newWinner) setWinner(newWinner > 0 ? 1 : -1);
  }

  return (
    <>
      <Navbar />
      <Container>
        <Title>Tic Tac Toe</Title>
        <GameBoard>
          {Array.from({ length: 9 }).map((_, index) => {
            const key = getKeyFromIndex(index);

            return (
              <Square
                type="button"
                key={index}
                onClick={() => handleClick(key)}
              >
                {getLabel(values[key])}
              </Square>
            );
          })}
        </GameBoard>
      </Container>
    </>
  );
};

export default TicTacToe;
