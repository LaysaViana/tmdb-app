import { useState } from 'react';

import { Container } from './SearchBar.styles';
import SearchInput from '../SearchInput/SearchInput';
import FilterIcon from '../../assets/icons/Filter.svg';
import { Button } from '../FilterButton/FilterButton.style';

interface SearchBarProps {
  onSearch: (query: string, genre: string) => void;
  onFilterClick: () => void;
}

export default function SearchBar({ onSearch, onFilterClick }: SearchBarProps) {
  const [query, setQuery] = useState('');

  return (
    <Container>
      <SearchInput value={query} onChange={setQuery} />
      <Button onClick={onFilterClick}>
        <FilterIcon width={20} height={20} color="white" />
      </Button>
    </Container>
  );
}
