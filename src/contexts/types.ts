export interface FiltersContextData {
  searchTerm: string;
  selectedGenre: string;
  selectedActor: string;
  page: number;
  inputValue: string;
  showFilters: boolean;

  setSearchTerm: (term: string) => void;
  setSelectedGenre: (id: string) => void;
  setSelectedActor: (id: string) => void;
  setPage: (page: number) => void;
  setInputValue: (val: string) => void;
  setShowFilters: (val: boolean) => void;
  resetFilters: () => void;

  handleInputChange: (val: string) => void;
  handleSearch: () => void;
  handleFilterSelect: (filterType: 'genre' | 'actor', id: string) => void;
  handleToggleFilters: () => void;
  handlePageChange: (newPage: number) => void;
}
