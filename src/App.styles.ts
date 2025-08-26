import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;
