import { useQuery } from '@tanstack/react-query';
import { tmdb } from '../services/api';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface UseMoviesProps {
  query?: string;
  genre?: string;
  page?: number;
}

interface MoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export function useMovies({
  query = '',
  genre = '',
  page = 1,
}: UseMoviesProps) {
  return useQuery<MoviesResponse, Error>({
    queryKey: ['movies', query, genre, page], // chave da query
    queryFn: async () => {
      const params: Record<string, string | number> = { page };
      if (query) params.query = query;
      if (genre) params.with_genres = genre;

      const url = query ? '/search/movie' : '/movie/popular';
      const { data } = await tmdb.get(url, { params });
      return data;
    },
    keepPreviousData: true,
  });
}
