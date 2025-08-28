import { useParams } from 'react-router-dom';

import {
  Container,
  Poster,
  Info,
  Title,
  Subtitle,
  ContainerPoster,
  ContainerDetails,
  ContainerDetailsItems,
  StatBox,
  StatTitle,
  StatValue,
  PosterBackground,
  TrailerContainer,
  GenreTag,
} from './MovieDetails.styles';
import { useMovieDetails } from '../../hooks/useMoviesDetails';
import Loading from '../../components/Loading/Loading';
import RechartsComponents from '../../components/Recharts/RechartsComponent';
import { formatMovieDetails } from '../../../utils/formatMoviesDetails';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useMovieDetails(id);

  const formatted = data ? formatMovieDetails(data) : null;

  if (!id) return <p>ID inválido</p>;

  if (isLoading) {
    return <Loading />;
  }

  if (error) return <p>Erro ao carregar o filme.</p>;

  const trailer = data?.videos?.results?.find((v) => v.type === 'Trailer');

  return (
    <Container>
      <PosterBackground
        $posterUrl={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
      >
        <ContainerPoster>
          <Poster
            src={`https://image.tmdb.org/t/p/w400${data?.poster_path}`}
            alt={data?.title}
          />
          <Info>
            <Title>{data?.title}</Title>
            <Subtitle>Título Original: {formatted?.title ?? '-'}</Subtitle>

            <StatBox>
              <StatTitle>SINOPSE</StatTitle>
              <StatValue>{data?.overview ?? '-'}</StatValue>
            </StatBox>

            <StatBox>
              <StatTitle>Gêneros</StatTitle>
              <StatValue>
                {formatted?.genres
                  ? formatted.genres
                      .split(', ')
                      .map((genre) => <GenreTag key={genre}>{genre}</GenreTag>)
                  : '-'}
              </StatValue>
            </StatBox>
          </Info>
          <ContainerDetails>
            <ContainerDetailsItems $alignRight>
              <StatBox small>
                <StatTitle>Popularidade</StatTitle>
                <StatValue>{formatted?.popularity}</StatValue>
              </StatBox>
              <StatBox small>
                <StatTitle>Votos</StatTitle>
                <StatValue>{formatted?.voteAverage ?? '-'}</StatValue>
              </StatBox>
              <RechartsComponents voteAverage={data?.vote_average ?? 0} />
            </ContainerDetailsItems>

            <ContainerDetailsItems>
              <StatBox>
                <StatTitle>Lançamento</StatTitle>
                <StatValue>{formatted?.releaseDate}</StatValue>
              </StatBox>

              <StatBox>
                <StatTitle>Duração</StatTitle>
                <StatValue>{formatted?.runtime ?? '-'}</StatValue>
              </StatBox>
            </ContainerDetailsItems>

            <ContainerDetailsItems>
              <StatBox>
                <StatTitle>Situação</StatTitle>
                <StatValue>{data?.status ?? '-'}</StatValue>
              </StatBox>

              <StatBox>
                <StatTitle>Idioma</StatTitle>
                <StatValue lowercase>{formatted?.language ?? '-'}</StatValue>
              </StatBox>
            </ContainerDetailsItems>

            <ContainerDetailsItems>
              <StatBox>
                <StatTitle>Orçamento</StatTitle>
                <StatValue lowercase>{formatted?.budget}</StatValue>
              </StatBox>

              <StatBox>
                <StatTitle>Receita</StatTitle>
                <StatValue>{formatted?.revenue ?? '-'}</StatValue>
              </StatBox>

              <StatBox>
                <StatTitle>Lucro</StatTitle>
                <StatValue>{formatted?.profit ?? '-'}</StatValue>
              </StatBox>
            </ContainerDetailsItems>
          </ContainerDetails>
        </ContainerPoster>
      </PosterBackground>

      {trailer ? (
        <TrailerContainer>
          <h1>Trailer</h1>
          <iframe
            width="560"
            height="600"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer?.name ?? 'Trailer'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </TrailerContainer>
      ) : (
        <p>Sem trailer disponível</p>
      )}
    </Container>
  );
}
