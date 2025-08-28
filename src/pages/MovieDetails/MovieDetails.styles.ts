import styled from 'styled-components';
import { mq, mqMax } from '../../../styles/theme';

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  ${mqMax('mobile')} {
    padding: 1rem;
  }

  ${mq('tablet')} {
    padding: 1.5rem;
  }

  ${mq('desktop')} {
    padding: 2rem;
  }

  ${mq('largeDesktop')} {
    padding: 3rem;
  }
`;

export const PosterBackground = styled.div<{ $posterUrl: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: url(${(props) => props.$posterUrl}) no-repeat center/cover;
  padding: 2rem;
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  ${mqMax('mobile')} {
    padding: 1rem;
  }

  ${mq('tablet')} {
    padding: 1.5rem;
  }

  ${mq('desktop')} {
    padding: 2rem;
  }

  ${mq('largeDesktop')} {
    padding: 3rem;
  }
`;

export const Poster = styled.img`
  width: 300px;
  border-radius: 8px;
  object-fit: cover;

  ${mqMax('mobile')} {
    width: 200px;
  }

  ${mq('tablet')} {
    width: 250px;
  }

  ${mq('desktop')} {
    width: 300px;
  }

  ${mq('largeDesktop')} {
    width: 350px;
  }
`;

export const ContainerPoster = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;

  ${mqMax('mobile')} {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const Info = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start ${mqMax('mobile')} {
    gap: 0.3rem;
  }

  ${mq('tablet')} {
    gap: 0.4rem;
    align-items: flex-start;
  }

  ${mq('desktop')} {
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  align-content: left;
  font-size: 2rem;
  margin: 0;
  align-items: flex-start;
  color: ${({ color, theme }) => color ?? theme.colors.textPrimary};

  ${mqMax('mobile')} {
    font-size: 1.5rem;
    align-items: flex-start;
  }

  ${mq('tablet')} {
    font-size: 1.8rem;
    align-items: flex-start;
  }

  ${mq('desktop')} {
    font-size: 2rem;
    align-items: flex-start;
  }

  ${mq('largeDesktop')} {
    font-size: 2.2rem;
    align-items: flex-start;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: ${({ color, theme }) => color ?? theme.colors.textSecondary};

  ${mqMax('mobile')} {
    font-size: 1rem;
    align-items: flex-start;
  }

  ${mq('tablet')} {
    font-size: 1.1rem;
    align-items: flex-start;
  }

  ${mq('desktop')} {
    font-size: 1.2rem;
    align-items: flex-start;
  }

  ${mq('largeDesktop')} {
    font-size: 1.3rem;
    align-items: flex-start;
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mqMax('mobile')} {
    > :nth-child(1) {
      order: 3;
    }
    > :nth-child(2) {
      order: 4;
    }
    > :nth-child(3) {
      order: 5;
    }
    > :nth-child(4) {
      order: 6;
    }
  }
`;

export const ContainerDetailsItems = styled.div<{ $alignRight?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  text-transform: uppercase;
  justify-content: ${({ $alignRight }) =>
    $alignRight ? 'flex-end' : 'flex-start'};

  ${mqMax('mobile')} {
    flex-direction: column;
    align-items: ${({ $alignRight }) =>
      $alignRight ? 'flex-end' : 'flex-start'};
    gap: 8px;
  }
`;

export const StatBox = styled.div<{ small?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  min-width: 120px;
  text-align: center;
  text-align: left;

  flex: ${({ small }) => (small ? '0' : '1')};
  min-width: ${({ small }) => (small ? '120px' : '0')};
  min-height: ${({ small }) => (small ? 'auto' : '80px')};

  ${mqMax('mobile')} {
    padding: 12px;
    font-size: 0.8rem;
    min-width: 100px;
  }
`;

export const StatTitle = styled.span`
  font-weight: 700;
  font-size: 0.8rem;
  opacity: 0.8;
  color: ${({ color, theme }) => color ?? theme.colors.textSecondary};

  ${mqMax('mobile')} {
    font-size: 0.7rem;
  }
`;

export const StatValue = styled.span<{ lowercase?: boolean }>`
  font-weight: 600;
  text-transform: ${({ lowercase }) => (lowercase ? 'lowercase' : 'none')};
  color: ${({ color, theme }) => color ?? theme.colors.textPrimary};

  ${mqMax('mobile')} {
    font-size: 0.85rem;
  }
`;

export const TrailerContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: left;
  min-height: 400px;

  ${mqMax('mobile')} {
    margin-top: 1.5rem;
    order: 12;
  }

  ${mq('tablet')} {
    margin-top: 2rem;
    min-height: 350px;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
  }
`;

export const GenreTag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin: 2px;
  background-color: #c150ff2e;
  color: #ffffff;
  border-radius: 3px;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
