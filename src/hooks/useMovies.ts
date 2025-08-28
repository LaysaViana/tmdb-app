import { useQuery } from '@tanstack/react-query';
import { tmdb } from '../services/api';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface UseMoviesProps {
  query?: string;
  genre?: string;
  actor?: string;
  page?: number;
  perPage?: number;
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
  actor = '',
  page = 1,
  perPage = 10,
}: UseMoviesProps) {
  const tmdbPage = Math.ceil((page * perPage) / 20);

  return useQuery<MoviesResponse, Error>({
    queryKey: ['movies', query, genre, actor, tmdbPage],
    queryFn: async () => {
      const params: Record<string, string | number> = { page: tmdbPage };

      if (query) params.query = query;
      if (genre) params.with_genres = genre;
      if (actor) params.with_cast = actor;

      let url = '/movie/popular';

      if (query) {
        url = '/search/movie';
      } else if (genre || actor) {
        url = '/discover/movie';
      }

      const { data } = await tmdb.get<MoviesResponse>(url, { params });

      return data;
    },
    // keepPreviousData: true,
  });
}
