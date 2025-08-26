import styled from "styled-components";
import { mq } from "../../theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  ${mq('tablet')} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.2rem;
  }

  ${mq('desktop')} {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  ${mq('largeDesktop')} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
`;
