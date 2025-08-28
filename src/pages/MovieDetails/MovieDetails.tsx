import { useParams } from 'react-router-dom';

import {
  Container,
  Poster,
  Info,
  Title,
  Subtitle,
  VideoContainer,
  ContainerPoster,
  ContainerDetails,
  ContainerDetailsItems,
} from './MovieDetails.styles';
import { useMovieDetails } from '../../hooks/useMoviesDetails';
import Loading from '../../components/Loading/Loading';
import RechartsComponents from '../../components/Recharts/RechartsComponent';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useMovieDetails(id);

  if (!id) return <p>ID inválido</p>;

  if (isLoading) {
    return <Loading />;
  }

  if (error) return <p>Erro ao carregar o filme.</p>;

  const trailer = data?.videos?.results?.find((v) => v.type === 'Trailer');

  return (
    <Container
      $posterUrl={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
    >
      <ContainerPoster>
        <Poster
          src={`https://image.tmdb.org/t/p/w400${data?.poster_path}`}
          alt={data?.title}
        />
        <Info>
          <Title>{data?.title}</Title>
          <Subtitle>Título Original: {data?.original_title}</Subtitle>
          <p>Descrição: {data?.overview}</p>
          <p>Gêneros: {data?.genres.map((g) => g.name).join(', ')}</p>
        </Info>
        <ContainerDetails>
          <ContainerDetailsItems>
            <p>Popularidade: {data?.popularity}</p>
            <p>Votos Médios: {data?.vote_average}</p>
            <RechartsComponents voteAverage={data?.vote_average ?? 0} />
          </ContainerDetailsItems>
          <ContainerDetailsItems>
            <p>Data de Lançamento: {data?.release_date}</p>
            <p>Duração: {data?.runtime} minutos</p>
          </ContainerDetailsItems>
          <ContainerDetailsItems>
            <p>Situação</p>
            <p>Idioma</p>
          </ContainerDetailsItems>
          <ContainerDetailsItems>
            <p>Orçamento: ${data?.budget.toLocaleString()}</p>
            <p>Receita</p>
            <p>Lucro</p>
          </ContainerDetailsItems>
        </ContainerDetails>
      </ContainerPoster>

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
