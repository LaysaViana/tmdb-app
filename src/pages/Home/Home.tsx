import SearchBar from '../../components/SearchBar/SearchBar';
import FilterButton from '../../components/FilterButton/FilterButton';
import MovieCard from '../MovieCard/MovieCard';
import { useMovies } from '../../hooks/useMovies';
import ChevronLeftIcon from '../../assets/icons/Chevron_Left.svg';
import ChevronRightIcon from '../../assets/icons/Chevron_Right.svg';

import {
  Container,
  EmptyContainer,
  FeedbackMessage,
  FiltersContainer,
  Footer,
  Grid,
  PageButton,
  PaginationContainer,
} from './Home.styles';

import { useFiltersContext } from '../../contexts/useFiltersContext';
import Loading from '../../components/Loading/Loading';
import React from 'react';

export default function Home() {
  const {
    searchTerm,
    selectedGenre,
    selectedActor,
    page,
    inputValue,
    showFilters,
    handleFilterSelect,
    handleSearch,
    handlePageChange,
    handleInputChange,
    handleToggleFilters,
  } = useFiltersContext();

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

  const moviesPerPage = 10;
  const moviesDataResults = moviesData?.results ?? [];

  const tmdbHalfPage = (page - 1) % 2;
  const startIndex = tmdbHalfPage * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  const moviesToShow = moviesDataResults.slice(startIndex, endIndex);

  if (error) return <p>Erro ao buscar filmes.</p>;

  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  const totalPages = moviesData?.total_pages ?? 1;
  const maxVisible = 4;
  const startPage = Math.max(1, page - Math.floor(maxVisible / 2));
  const endPage = Math.min(totalPages, startPage + maxVisible - 1);

  const renderLoadingState = () => (
    <Grid>
      {Array.from({ length: 6 }).map((_, i) => (
        <React.Fragment key={i}>
          <Loading />
          <MovieCard
            id={0}
            title="..."
            posterUrl="https://via.placeholder.com/200x300"
            releaseDate="..."
          />
        </React.Fragment>
      ))}
    </Grid>
  );

  const renderEmptyState = () => (
    <EmptyContainer>
      <FeedbackMessage>Ops! Nenhum filme encontrado 😢</FeedbackMessage>
    </EmptyContainer>
  );

  const renderMovies = () => (
    <Grid>
      {moviesToShow?.map((movie) => (
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
          vote_average={movie.vote_average}
          genres={movie.genres}
        />
      ))}
    </Grid>
  );

  const renderContent = () => {
    if (isLoading) return renderLoadingState();
    if (moviesData?.results?.length === 0) return renderEmptyState();
    return renderMovies();
  };

  return (
    <>
      <Container>
        <SearchBar
          value={inputValue}
          onChange={handleInputChange}
          onSearch={handleSearch}
          onFilterClick={handleToggleFilters}
        />
        <FiltersContainer>
          <FilterButton
            onFilterSelect={handleFilterSelect}
            showFilters={showFilters}
          />
        </FiltersContainer>
      </Container>

      {renderContent()}

      {moviesData && moviesData.total_pages > 1 && (
        <PaginationContainer>
          <PageButton
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            <ChevronLeftIcon />
          </PageButton>

          {Array.from({ length: endPage - startPage + 1 }).map((_, i) => {
            const pageNumber = startPage + i;
            return (
              <PageButton
                key={pageNumber}
                $active={page === pageNumber}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </PageButton>
            );
          })}

          {/* se não terminar na última, mostra reticências */}
          {endPage < totalPages && <span>...</span>}

          <PageButton
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            <ChevronRightIcon />
          </PageButton>
        </PaginationContainer>
      )}
      <Footer>2023 © Todos os direitos reservados a Cubos Movies</Footer>
    </>
  );
}
