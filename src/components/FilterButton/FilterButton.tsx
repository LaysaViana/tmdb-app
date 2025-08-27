import { Container, FilterList, FilterItem } from './FilterButton.style';
import { useFilters } from '../../hooks/useFilters';

interface FilterButtonProps {
  onFilterSelect: (filterType: 'genre' | 'actor', id: string) => void;
  showFilters: boolean;
}

export default function FilterButton({
  onFilterSelect,
  showFilters,
}: FilterButtonProps) {
  const { data, isLoading } = useFilters();

  if (isLoading) return null;

  return (
    <Container>
      {showFilters && (
        <FilterList>
          {data?.genres.map((genre) => (
            <FilterItem
              key={genre.id}
              onClick={() => onFilterSelect('genre', String(genre.id))}
            >
              {genre.name}
            </FilterItem>
          ))}
          {data?.actors.map((actor) => (
            <FilterItem
              key={actor.id}
              onClick={() => onFilterSelect('actor', String(actor.id))}
            >
              {actor.name}
            </FilterItem>
          ))}
        </FilterList>
      )}
    </Container>
  );
}
