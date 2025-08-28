import { Container } from './SearchBar.styles';
import SearchInput from '../SearchInput/SearchInput';
import FilterIcon from '../../assets/icons/Filter.svg';
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
        <FilterIcon width={20} height={20} color="white" />
      </Button>
    </Container>
  );
}
