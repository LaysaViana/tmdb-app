import SearchBar from "../../components/SearchBar/SearchBar";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../MovieCard/MovieCard";
import { Grid } from "./Home.styles";
import { useState } from "react";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const { data: movies, isLoading, error } = useMovies({ query: searchTerm, genre: selectedGenre });

  const handleSearch = (query: string, genre: string) => {
    setSearchTerm(query);
    setSelectedGenre(genre);
  };

if (isLoading) {
  return (
    <Grid>
      {Array.from({ length: 6 }).map((_, i) => (
        <MovieCard key={i} title="..." posterUrl="https://via.placeholder.com/200x300" releaseDate="..." />
      ))}
    </Grid>
  );
}

  if (error) return <p>Erro ao buscar filmes.</p>;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Grid>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterUrl={
  movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/200x300"
}
            releaseDate={movie.release_date}
          />
        ))}
      </Grid>
    </>
  );
}
