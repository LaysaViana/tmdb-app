import { useQuery } from '@tanstack/react-query';
import { tmdb } from '../services/api';
interface Genre {
  id: number;
  name: string;
}
interface GenresResponse {
  genres: Genre[];
}
interface Actor {
  id: number;
  name: string;
}
interface ActorsResponse {
  results: Actor[];
}
interface FiltersData {
  genres: Genre[];
  actors: Actor[];
}

export function useFilters() {
  return useQuery<FiltersData, Error>({
    queryKey: ['filters'],
    queryFn: async () => {
      try {
        const { data: genresData } = await tmdb.get<GenresResponse>(
          '/genre/movie/list',
        );
        const { data: actorsData } = await tmdb.get<ActorsResponse>(
          '/person/popular',
        );

        if (!genresData?.genres) throw new Error('Falha ao carregar gêneros');
        if (!actorsData?.results) throw new Error('Falha ao carregar atores');

        return {
          genres: genresData.genres,
          actors: actorsData.results.map((actor) => ({
            id: actor.id,
            name: actor.name,
          })),
        };
      } catch (err: unknown) {
        if (err instanceof Error) {
          throw new Error(`Falha ao buscar filtros: ${err.message}`);
        }
        throw new Error('Falha desconhecida ao buscar filtros.');
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutos em cache
  });
}
