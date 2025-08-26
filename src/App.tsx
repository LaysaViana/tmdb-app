import { ThemeProvider } from 'styled-components';
import { AppContainer } from './App.styles';

import { useState } from 'react';
import { themes } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

const queryClient = new QueryClient();

export default function App() {
  const [darkMode, setDarkMode] = useState(true); 
  const theme = darkMode ? themes.dark : themes.light;

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Home />
        </main>
      </AppContainer>
    </ThemeProvider>
    </QueryClientProvider>
  );
}
