import styled from 'styled-components';
import { mq, mqMax } from '../../../styles/theme';

export const ChartContainer = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  aspect-ratio: 1 / 1;
  width: 80px;
  height: auto;

  ${mqMax('mobile')} {
    width: 60px;
    height: 60px;
  }

  ${mq('tablet')} {
    width: 70px;
    height: 70px;
  }

  ${mq('desktop')} {
    width: 80px;
    height: 80px;
  }

  ${mq('largeDesktop')} {
    width: 90px;
    height: 90px;
  }
`;

export const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 0.8rem;
  z-index: 2;
  text-align: center;

  ${mqMax('mobile')} {
    font-size: 0.65rem;
  }

  ${mq('tablet')} {
    font-size: 0.75rem;
  }

  ${mq('desktop')} {
    font-size: 0.8rem;
  }

  ${mq('largeDesktop')} {
    font-size: 0.9rem;
  }

  .number {
    color: ${({ theme }) => theme.colors.chart};
    font-size: 0.9rem;

    ${mqMax('mobile')} {
      font-size: 0.7rem;
    }

    ${mq('desktop')} {
      font-size: 0.9rem;
    }

    ${mq('largeDesktop')} {
      font-size: 1rem;
    }
  }

  .percent {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 0.6rem;

    ${mqMax('mobile')} {
      font-size: 0.5rem;
    }

    ${mq('desktop')} {
      font-size: 0.6rem;
    }

    ${mq('largeDesktop')} {
      font-size: 0.7rem;
    }
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

  ${mqMax('mobile')} {
    width: 35px;
    height: 35px;
  }

  ${mq('tablet')} {
    width: 45px;
    height: 45px;
  }

  ${mq('desktop')} {
    width: 50px;
    height: 50px;
  }

  ${mq('largeDesktop')} {
    width: 55px;
    height: 55px;
  }
`;
