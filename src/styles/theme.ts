import { whiteA, blue, gray } from '@radix-ui/colors';

export const breakpoints = {
  mobile: '414px',
  tablet: '768px',
  desktop: '1366px',
  largeDesktop: '1920px',
};

export const mq = (bp: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[bp]})`;
export const mqMax = (bp: keyof typeof breakpoints) =>
  `@media (max-width: ${breakpoints[bp]})`;

export const darkTheme = {
  mode: 'dark',
  colors: {
    background: gray.gray12,
    background2: '#B744F714',
    surface: '#1a191b',
    textPrimary: whiteA.whiteA12,
    textSecondary: '#B5B2BC',
    primary: '#EEEEF0',
    primaryHover: '#8e4ec6',
    border: gray.gray6,
    accent: blue.blue9,
    chart: '#FFE000',
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
  mode: 'light',
  colors: {
    background: 'linear-gradient(135deg, #F7F5FA 0%, #EDE6F7 100%)',
    background2: '#B744F714',
    surface: '#9E9E9E',
    textSecondary: gray.gray11,
    primary: '#8e4ec6',
    primaryHover: '#7a3db0',
    border: gray.gray6,
    accent: '#B744F7',
    chart: '#FFE000',
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
