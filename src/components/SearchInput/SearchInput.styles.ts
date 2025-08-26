import styled from "styled-components";
import { mq } from "../../theme";

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 200px;
  font-size: 1rem;


  ${mq("mobile")} {
    width: 100%; 
  }

  ${mq("tablet")} {
    width: 250px;
    font-size: 1rem;
  }

  ${mq("desktop")} {
    width: 300px;
    font-size: 1.1rem;
  }
`;