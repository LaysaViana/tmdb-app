import { createContext } from 'react';
import type { FiltersContextData } from './types';

export const FiltersContext = createContext<FiltersContextData | undefined>(
  undefined,
);
