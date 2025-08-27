// src/hooks/useMovieDetails.ts
import { useQuery } from '@tanstack/react-query';
import { tmdb } from '../services/api';

export interface MovieDetailsData {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  budget: number;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
  popularity: number;
  videos: { results: { key: string; name: string; type: string }[] };
}

export function useMovieDetails(id: string | undefined) {
  return useQuery<MovieDetailsData>({
    queryKey: ['movie', id],
    queryFn: async () => {
      if (!id) throw new Error('ID inválido');
      const { data } = await tmdb.get(`/movie/${id}`, {
        params: { append_to_response: 'videos' },
      });
      return data;
    },
    enabled: !!id,
  });
}
