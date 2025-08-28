import { useQuery } from '@tanstack/react-query';
import { tmdb } from '../services/api';
import type { MoviesResponse, UseMoviesProps } from '../types/movies';

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
      const params: Record<string, string | number | boolean> = {
        page: tmdbPage,
        include_adult: false,
      };

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
  });
}
