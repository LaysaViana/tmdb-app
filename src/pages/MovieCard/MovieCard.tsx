import { Card, Info, Poster } from './Movie.styles';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  posterUrl: string;
  releaseDate: string;
}

export default function MovieCard({
  id,
  title,
  posterUrl,
  releaseDate,
}: MovieCardProps) {
  const navigate = useNavigate();

  const handleClickDetails = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card onClick={handleClickDetails}>
      <Poster src={posterUrl} alt={title} />
      <Info>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </Info>
    </Card>
  );
}
