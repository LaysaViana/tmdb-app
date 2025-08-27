import { useQuery } from '@tanstack/react-query';
import { tmdb } from '../services/api';

interface Genre {
  id: number;
  name: string;
}

interface Actor {
  id: number;
  name: string;
}

interface FiltersData {
  genres: Genre[];
  actors: Actor[];
}

interface GenresResponse {
  genres: Genre[];
}

interface ActorsResponse {
  results: Actor[];
}

export function useFilters() {
  return useQuery<FiltersData>({
    queryKey: ['filters'],
    queryFn: async () => {
      const { data: genresData } = await tmdb.get<GenresResponse>(
        '/genre/movie/list',
      );
      const { data: actorsData } = await tmdb.get<ActorsResponse>(
        '/person/popular',
      );

      return {
        genres: genresData.genres,
        actors: actorsData.results.map((actor) => ({
          id: actor.id,
          name: actor.name,
        })),
      };
    },
  });
}
