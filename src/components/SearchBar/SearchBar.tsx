import { useState } from "react";
import { Container } from "./SearchBar.styles";
import SearchInput from "../SearchInput/SearchInput";
import FilterButton from "../FilterButton/FilterButton";

interface SearchBarProps {
  onSearch: (query: string, genre: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");

  const handleSearch = () => {
    onSearch(query, genre);
  };

  return (
    <Container>
      <SearchInput value={query} onChange={setQuery} />
      <FilterButton value={genre} onChange={setGenre} />
      <button onClick={handleSearch}>🔍 Buscar</button>
    </Container>
  );
}
