import { Container, FilterList, FilterItem } from './FilterButton.style';
import { useFilters } from '../../hooks/useFilters';
import { useFiltersContext } from '../../contexts/useFiltersContext';

interface FilterButtonProps {
  onFilterSelect: (filterType: 'genre' | 'actor', id: string) => void;
  showFilters: boolean;
}

export default function FilterButton({
  onFilterSelect,
  showFilters,
}: FilterButtonProps) {
  const { data, isLoading } = useFilters();
  const { selectedGenre, selectedActor } = useFiltersContext();

  if (isLoading) return null;

  return (
    <Container>
      {showFilters && (
        <FilterList>
          {data?.genres.map((genre) => (
            <FilterItem
              key={genre.id}
              $active={selectedGenre === String(genre.id)}
              onClick={() => onFilterSelect('genre', String(genre.id))}
            >
              {genre.name}
            </FilterItem>
          ))}
          {data?.actors.map((actor) => (
            <FilterItem
              key={actor.id}
              $active={selectedActor === String(actor.id)}
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
