import RechartsComponents from '../../components/Recharts/RechartsComponent';
import { Card, Genres, Overlay, Poster, Title } from './MovieCard.styles';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title?: string;
  posterUrl?: string;
  genres?: { id: number; name: string }[];
  vote_average?: number;
  releaseDate?: string;
}

export default function MovieCard({
  id,
  title,
  posterUrl,
  genres = [],
  vote_average = 0,
}: MovieCardProps) {
  const navigate = useNavigate();

  const handleClickDetails = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card onClick={handleClickDetails}>
      <Poster src={posterUrl} alt={title} />
      <Title>{title}</Title>
      <Overlay>
        <RechartsComponents voteAverage={vote_average} />
        <Genres>
          {genres.map((g, idx) => (
            <span key={g.id ?? idx}>
              {g.name}
              {idx < genres.length - 1 ? ', ' : ''}
            </span>
          ))}
        </Genres>
      </Overlay>
    </Card>
  );
}
