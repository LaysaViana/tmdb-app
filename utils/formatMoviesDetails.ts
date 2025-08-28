import type { MovieDetailsData } from '../src/types/movieDetails';

export const languageMap: Record<string, string> = {
  en: 'Inglês',
  pt: 'Português',
};

export function formatMovieDetails(movie: MovieDetailsData) {
  const formatCurrency = (value: number) => {
    if (!value) return '-';
    return `$${(value / 1_000_000).toFixed(2)}M`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return {
    title: movie.title,
    releaseDate: formatDate(movie.release_date),
    runtime: `${movie.runtime} min`,
    budget: formatCurrency(movie.budget),
    revenue: formatCurrency(movie.revenue),
    profit: formatCurrency(movie.profit),
    language: languageMap[movie.language] ?? movie.language,
    genres: movie.genres.map((g) => g.name).join(', '),
    popularity: movie.popularity.toFixed(0),
    voteAverage: movie.vote_average.toFixed(1),
  };
}
