import { useQuery } from '@tanstack/react-query';
import { tmdb } from '../services/api';
import type { MovieDetailsData } from '../types/movieDetails';

export function useMovieDetails(id?: string) {
  return useQuery<MovieDetailsData>({
    queryKey: ['movie', id],
    queryFn: async () => {
      if (!id) throw new Error('ID inválido');
      const { data } = await tmdb.get(`/movie/${id}`, {
        params: { append_to_response: 'videos' },
      });

      return {
        ...data,
        profit: data.revenue - data.budget,
        language: data.original_language,
      };
    },
    enabled: !!id,
  });
}
