import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
`;

export const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 0.8rem;
  z-index: 2;

  .number {
    color: '#FFE000';
    font-size: 0.9rem;
  }

  .percent {
    color: #ffffff;
    font-size: 0.6rem;
  }
`;

export const BlurCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
`;

export const COLORS = ['#FFE000', '#e0e0e0'];
