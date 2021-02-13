import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #131326;

  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const LeftButtonContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;

  align-items: center;

  padding: 6px;
  padding-right: 18px;
  border-radius: 32px;

  &:hover {
    background-color: #1a1a2e;
  }
`;

export const LeftButtonText = styled.p`
  color: #fcfcfc;
  font-size: 18px;
  font-weight: 500;
`;

export const LeftButtonIcon = styled(FiChevronLeft)`
  color: #fcfcfc;
  font-size: 32px;
`;
