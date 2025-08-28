import { useContext } from 'react';
import type { FiltersContextData } from './types';
import { FiltersContext } from './FiltersContext';

export function useFiltersContext(): FiltersContextData {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFiltersContext must be used within a FiltersProvider');
  }
  return context;
}
