import { useQuery } from "@tanstack/react-query";
import { tmdb } from "../services/api";


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface UseMoviesProps {
  query: string;
  genre: string;
}

export function useMovies({ query, genre }: UseMoviesProps) {
  return useQuery<Movie[], Error>({
    queryKey: ["movies", query, genre],
    queryFn: async () => {
      const params: Record<string, string> = {};
      if (query) params.query = query;
      if (genre) params.with_genres = genre;

      const url = query ? "/search/movie" : "/movie/popular";
      const { data } = await tmdb.get(url, { params });
      return data.results;
    },
    keepPreviousData: true,
  });
}
