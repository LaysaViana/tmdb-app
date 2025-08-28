export interface Genre {
  id: number;
  name: string;
}
export interface GenresResponse {
  genres: Genre[];
}
export interface Actor {
  id: number;
  name: string;
}
export interface ActorsResponse {
  results: Actor[];
}
export interface FiltersData {
  genres: Genre[];
  actors: Actor[];
}
