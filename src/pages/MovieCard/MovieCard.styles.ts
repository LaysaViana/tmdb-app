import styled from 'styled-components';
import { mq } from '../../theme';

export const Card = styled.div`
  width: 150px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  ${mq('tablet')} {
    width: 180px;
  }

  ${mq('desktop')} {
    width: 200px;
  }

  ${mq('largeDesktop')} {
    width: 220px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;

  ${mq('tablet')} {
    height: 270px;
  }

  ${mq('desktop')} {
    height: 300px;
  }

  ${mq('largeDesktop')} {
    height: 350px;
  }
`;

export const Info = styled.div`
  padding: 0.5rem;

  h3 {
    font-size: 0.9rem;

    ${mq('tablet')} {
      font-size: 1rem;
    }

    ${mq('desktop')} {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 0.8rem;

    ${mq('tablet')} {
      font-size: 0.9rem;
    }

    ${mq('desktop')} {
      font-size: 1rem;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;

export const Genres = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;
