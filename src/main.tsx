import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { FiltersProvider } from './contexts/FiltersProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </StrictMode>,
);
