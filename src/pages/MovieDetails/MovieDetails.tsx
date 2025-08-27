import { useParams } from 'react-router-dom';

import {
  Container,
  Poster,
  Info,
  Title,
  Subtitle,
  VideoContainer,
} from './MovieDetails.styles';
import { useMovieDetails } from '../../hooks/useMoviesDetails';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useMovieDetails(id);

  if (!id) return <p>ID inválido</p>;
  if (isLoading) return <p>Carregando detalhes...</p>;
  if (error) return <p>Erro ao carregar o filme.</p>;

  const trailer = data?.videos?.results?.find((v) => v.type === 'Trailer');

  return (
    <Container
      posterUrl={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
    >
      <Poster
        src={`https://image.tmdb.org/t/p/w400${data?.poster_path}`}
        alt={data?.title}
      />
      <Info>
        <Title>{data?.title}</Title>
        <Subtitle>Título Original: {data?.original_title}</Subtitle>
        <p>Data de Lançamento: {data?.release_date}</p>
        <p>Gêneros: {data?.genres.map((g) => g.name).join(', ')}</p>
        <p>Duração: {data?.runtime} minutos</p>
        <p>Orçamento: ${data?.budget.toLocaleString()}</p>
        <p>Votos Médios: {data?.vote_average}</p>
        <p>Popularidade: {data?.popularity}</p>
        <p>Descrição: {data?.overview}</p>
      </Info>

      {trailer && (
        <VideoContainer>
          <h1>Trailer</h1>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={data?.videos.results[0].name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      )}
    </Container>
  );
}
