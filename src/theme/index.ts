import { blackA, whiteA, blue, gray } from '@radix-ui/colors';

export const breakpoints = {
  mobile: '414px',
  tablet: '768px',
  desktop: '1366px',
  largeDesktop: '1920px',
};

// LIMITEI AQUI OS pageXOffset, VER ISSO PQ PODE QUEBRAR EM TELAS MUITO PEQUENAS E TELAS MUITO GRANDES

// helper para media queries
export const mq = (bp: keyof typeof breakpoints) => `@media (min-width: ${breakpoints[bp]})`;

export const darkTheme = {
  colors: {
    background: gray.gray12,
    surface: '#12111380',
    textPrimary: whiteA.whiteA12,
    textSecondary: gray.gray6,
    primary: blue.blue9,
    primaryHover: blue.blue10,
    border: gray.gray6,
    accent: blue.blue9,
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  fonts: {
    body: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    heading: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
};

export const lightTheme = {
  colors: {
    background: whiteA.whiteA12,
    surface: whiteA.whiteA11,
    textPrimary: blackA.blackA12,
    textSecondary: gray.gray11,
    primary: blue.blue9,
    primaryHover: blue.blue10,
    border: gray.gray6,
    accent: blue.blue9,
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  fonts: {
    body: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    heading: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
};


export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

