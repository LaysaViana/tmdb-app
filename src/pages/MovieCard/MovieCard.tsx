import { Card, Info, Poster } from "./Movie.styles";

interface MovieCardProps {
  title: string;
  posterUrl: string;
  releaseDate: string;
  onClick?: () => void;
}


export default function MovieCard({ title, posterUrl, releaseDate, onClick }: MovieCardProps) {
  return (
    <Card onClick={onClick}>
      <Poster src={posterUrl} alt={title} />
      <Info>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </Info>
    </Card>
  );
}
