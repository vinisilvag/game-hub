import styled from 'styled-components';
import { FiX, FiCircle } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #1a1a2e;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  color: #fff;

  margin-bottom: 48px;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Square = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 88px;
  height: 88px;
  background-color: #1b1b38;

  border-radius: 4px;
  border: 2px solid #262652;

  color: #fff;

  margin: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const OIcon = styled(FiCircle)`
  font-size: 38px;
`;

export const XIcon = styled(FiX)`
  font-size: 48px;
`;
