import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
`;

export const Button = styled.button<{ active?: boolean }>`
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme, active }) =>
    active ? theme.colors.textPrimary : theme.colors.textSecondary};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
