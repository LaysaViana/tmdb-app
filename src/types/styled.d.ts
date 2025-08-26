import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      textPrimary: string;
      textSecondary: string;
      primary: string;
      primaryHover: string;
      border: string;
      accent: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    fonts: {
      body: string;
      heading?: string;
    };
  }
}
