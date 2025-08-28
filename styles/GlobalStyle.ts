import { createGlobalStyle } from 'styled-components';
import { mq } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.5;
  }

  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    width: 100%;
    max-width: 1200px;  
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.md};

    ${mq('mobile')} {
      max-width: 100%;
      padding: ${({ theme }) => theme.spacing.sm};
    }

    ${mq('tablet')} {
      max-width: 720px;
      padding: ${({ theme }) => theme.spacing.md};
    }

    ${mq('desktop')} {
      max-width: 1366px;
      padding: ${({ theme }) => theme.spacing.lg};
    }

    ${mq('largeDesktop')} {
      max-width: 1920px;
      padding: ${({ theme }) => theme.spacing.lg};
    }
  }

  h1 {
    font-size: 2rem;
    ${mq('mobile')} { font-size: 1.5rem; }
    ${mq('tablet')} { font-size: 1.75rem; }
    ${mq('desktop')} { font-size: 2rem; }
    ${mq('largeDesktop')} { font-size: 2.25rem; }
  }

  h2 {
    font-size: 1.5rem;
    ${mq('mobile')} { font-size: 1.25rem; }
    ${mq('tablet')} { font-size: 1.4rem; }
    ${mq('desktop')} { font-size: 1.5rem; }
    ${mq('largeDesktop')} { font-size: 1.75rem; }
  }

  p, span, li {
    font-size: 1rem;
    ${mq('mobile')} { font-size: 0.9rem; }
    ${mq('tablet')} { font-size: 0.95rem; }
    ${mq('desktop')} { font-size: 1rem; }
    ${mq('largeDesktop')} { font-size: 1.05rem; }
  }


  .grid {
    display: grid;
    gap: ${({ theme }) => theme.spacing.md};
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    ${mq('mobile')} {
      gap: ${({ theme }) => theme.spacing.sm};
    }

    ${mq('tablet')} {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    ${mq('desktop')} {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    ${mq('largeDesktop')} {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
  }
`;
