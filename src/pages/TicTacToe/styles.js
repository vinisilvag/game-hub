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

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.modalIsOpen ? 1 : 0)};
  visibility: ${(props) => (props.modalIsOpen ? 'visible' : 'hidden')}; ;
`;

export const Modal = styled.div`
  background-color: #fff;
  padding: 2.4rem;
  width: 90%;
  max-width: 500px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: 600;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 0;
`;

export const ModalBodyText = styled.p``;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ResetButton = styled.button`
  font-size: 16px;
  width: 100%;
  height: 52px;
  background-color: #e94560;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: #cc3750;
  }
`;
