import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #1a1a2e;
`;

export const Warning = styled.h1`
  font-weight: 600;
  color: #fff;
`;
