export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
}

export interface UseMoviesProps {
  query?: string;
  genre?: string;
  actor?: string;
  page?: number;
  perPage?: number;
}

export interface MoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}
