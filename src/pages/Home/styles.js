import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #1a1a2e;
`;

export const TicTacToeButton = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background-color: #e94560;
  padding: 22px 24px;
  margin: 0 8px;

  &:hover {
    background-color: #cc3750;
  }
`;

export const MinefieldButton = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background-color: #1766c2;
  padding: 22px 24px;
  margin: 0 8px;

  &:hover {
    background-color: #1256a6;
  }
`;
