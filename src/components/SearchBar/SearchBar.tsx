import { Container, IconWrapper } from './SearchBar.styles';
import SearchInput from '../SearchInput/SearchInput';
import { Button } from '../FilterButton/FilterButton.style';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
  onFilterClick?: () => void;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  onFilterClick,
}: SearchBarProps) {
  return (
    <Container>
      <SearchInput
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        placeholder="Pesquise por filmes"
      />
      <Button onClick={onFilterClick}>
        <IconWrapper />
      </Button>
    </Container>
  );
}
