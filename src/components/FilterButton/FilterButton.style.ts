import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #005fcc;
  }
`;

export const Dropdown = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;
