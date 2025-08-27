import SearchBar from '../../components/SearchBar/SearchBar';
import FilterButton from '../../components/FilterButton/FilterButton';
import { useMovies } from '../../hooks/useMovies';
import MovieCard from '../MovieCard/MovieCard';

import { useState } from 'react';
import {
  Container,
  FiltersContainer,
  Grid,
  PageButton,
  PaginationContainer,
} from './Home.styles';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedActor, setSelectedActor] = useState('');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  //  buscar filmes conforme filtros
  const {
    data: moviesData,
    isLoading,
    error,
  } = useMovies({
    query: searchTerm,
    genre: selectedGenre,
    actor: selectedActor,
    page,
  });

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    setPage(1); // resetar página ao pesquisar
  };

  // const handleFilterClick = () => {
  //   setShowFilters(() => !showFilters);
  // };

  const handleFilterSelect = (filterType: 'genre' | 'actor', id: string) => {
    if (filterType === 'genre') setSelectedGenre(id);
    if (filterType === 'actor') setSelectedActor(id);
    setPage(1); // resetar página ao filtrar
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (error) return <p>Erro ao buscar filmes.</p>;

  return (
    <>
      <Container>
        <SearchBar
          onSearch={handleSearch}
          onFilterClick={() => setShowFilters((prev) => !prev)}
        />
        <FiltersContainer>
          <FilterButton
            onFilterSelect={handleFilterSelect}
            showFilters={showFilters}
          />
        </FiltersContainer>
      </Container>

      <Grid>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <MovieCard
                key={i}
                title="..."
                posterUrl="https://via.placeholder.com/200x300"
                releaseDate="..."
                id={0}
              />
            ))
          : moviesData?.results?.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterUrl={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300'
                }
                releaseDate={movie.release_date}
              />
            ))}
      </Grid>
      {moviesData && moviesData.total_pages > 1 && (
        <PaginationContainer>
          <PageButton
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            {'<'}
          </PageButton>

          {Array.from({ length: Math.min(4, moviesData.total_pages) }).map(
            (_, i) => {
              const pageNumber = i + 1;
              return (
                <PageButton
                  key={pageNumber}
                  active={page === pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </PageButton>
              );
            },
          )}

          {moviesData.total_pages > 4 && <span>...</span>}

          <PageButton
            disabled={page === moviesData.total_pages}
            onClick={() => handlePageChange(page + 1)}
          >
            {'>'}
          </PageButton>
        </PaginationContainer>
      )}
    </>
  );
}
