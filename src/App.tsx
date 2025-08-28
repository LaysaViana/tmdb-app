import { ThemeProvider } from 'styled-components';
import { AppContainer, Footer, Main } from './App.styles';

import { useState } from 'react';
import { themes } from '../styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Reset } from 'styled-reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import { GlobalStyles } from '../styles/GlobalStyle';

const queryClient = new QueryClient();

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? themes.dark : themes.light;

  return (
    <QueryClientProvider client={queryClient}>
      <Reset />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <AppContainer>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/movie/:id" element={<MovieDetails />} />
              </Routes>
              <Footer>
                2023 © Todos os direitos reservados a Cubos Movies
              </Footer>
            </Main>
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
