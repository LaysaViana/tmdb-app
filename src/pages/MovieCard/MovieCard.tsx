import RechartsComponents from '../../components/Recharts/RechartsComponent';
import { Card, Genres, Info, Overlay, Poster, Title } from './MovieCard.styles';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title?: string;
  posterUrl?: string;
  releaseDate?: string;
  genres?: { id: number; name: string }[];
  vote_average?: number;
}

export default function MovieCard({
  id,
  title,
  posterUrl,
  releaseDate,
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
      <Overlay>
        <Title>{title}</Title>
        <Genres>
          {genres.map((g, idx) => (
            <span key={g.id ?? idx}>
              {g.name}
              {idx < genres.length - 1 ? ', ' : ''}
            </span>
          ))}
        </Genres>

        <RechartsComponents voteAverage={vote_average} />
      </Overlay>
      <Info>
        <h3>{title ?? 'Sem título'}</h3>
        <p>{releaseDate ?? 'Data indisponível'}</p>
      </Info>
    </Card>
  );
}
