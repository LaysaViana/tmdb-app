import { useState, type ReactNode } from 'react';
import { FiltersContext } from './FiltersContext';
import type { FiltersContextData } from './types';

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedActor, setSelectedActor] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedGenre('');
    setSelectedActor('');
    setPage(1);
  };

  const handleFilterSelect = (filterType: 'genre' | 'actor', id: string) => {
    if (filterType === 'genre') {
      setSelectedGenre(id);
      setSelectedActor('');
    }
    if (filterType === 'actor') {
      setSelectedActor(id);
      setSelectedGenre('');
    }

    setSearchTerm('');
    setPage(1);
  };

  const handleSearch = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      setSearchTerm(trimmed);
      setPage(1);
    } else {
      resetFilters();
      setInputValue('');
    }
  };

  const handleInputChange = (val: string) => {
    setInputValue(val);
    if (val.trim() === '') {
      resetFilters();
    }
  };

  const handleToggleFilters = () => {
    setShowFilters((prev) => {
      const next = !prev;

      if (!next) {
        setSelectedGenre('');
        setSelectedActor('');
      }

      return next;
    });
  };

  const handlePageChange = (newPage: number) => setPage(newPage);

  const value: FiltersContextData = {
    searchTerm,
    selectedGenre,
    selectedActor,
    page,
    inputValue,
    showFilters,
    setSearchTerm,
    setSelectedGenre,
    setSelectedActor,
    setPage,
    resetFilters,
    handleFilterSelect,
    handleSearch,
    handleInputChange,
    handleToggleFilters,
    handlePageChange,
    setInputValue,
    setShowFilters,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}
