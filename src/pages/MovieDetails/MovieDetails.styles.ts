import styled from 'styled-components';

export const Poster = styled.img`
  width: 300px;
  border-radius: 8px;
`;

export const Container = styled.div<{ posterUrl: string }>`
  min-height: 100vh;
  position: relative;
  background: url(${(props) => props.posterUrl}) no-repeat center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};

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
`;

export const Info = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const VideoContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  aspect-ratio: 16 / 9; /* mantém proporção 16:9 */
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
