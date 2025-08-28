export interface MovieDetailsData {
  status: string;
  original_language: string;
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
  revenue: number;
  profit: number;
  language: string;
}
