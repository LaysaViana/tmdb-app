import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top: 6px solid #ff4757;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin: 50px auto;
`;
