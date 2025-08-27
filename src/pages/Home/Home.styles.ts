import styled from 'styled-components';
import { mq } from '../../theme';

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  background-color: rgba(235, 234, 248, 0.08);
  padding: 1rem;
  border-radius: 12px 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

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

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 2rem 0;
`;

interface PageButtonProps {
  active?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.surface};
  color: ${({ active, theme }) =>
    active ? theme.colors.textPrimary : theme.colors.textSecondary};
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
