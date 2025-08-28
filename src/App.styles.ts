import styled from 'styled-components';
import backgropund from '../src/assets/icons/backgropund-krists-luhaers-unsplash.png';

export const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;

  background-image: url(${backgropund});
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: content-box;
`;

export const Main = styled.main`
  padding: 0rem 2rem 2rem 2rem;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #f1e6fd30;
  padding: 1rem;
`;
