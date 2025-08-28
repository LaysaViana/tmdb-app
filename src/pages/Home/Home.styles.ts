import styled from 'styled-components';
import { mq, mqMax } from '../../styles/theme';

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  ${mqMax('mobile')} {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.8rem;
    padding: 0.8rem;
  }

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

  ${mqMax('mobile')} {
    flex-direction: column;
    gap: 12px;
    margin: 12px 0;
  }

  ${mq('tablet')} {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 2rem 0;

  ${mqMax('mobile')} {
    flex-wrap: wrap;
    gap: 0.4rem;
    margin: 1.5rem 0;
  }
`;

interface PageButtonProps {
  $active?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primaryHover : theme.colors.surface};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : '#ccc'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  ${mqMax('mobile')} {
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }

  ${mq('tablet')} {
    padding: 0.45rem 0.7rem;
    font-size: 0.9rem;
  }

  ${mq('desktop')} {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;

  ${mqMax('mobile')} {
    height: 300px;
  }
`;

export const FeedbackMessage = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.chart};
  text-align: center;

  ${mqMax('mobile')} {
    font-size: 1.2rem;
  }

  ${mq('tablet')} {
    font-size: 1.3rem;
  }

  ${mq('desktop')} {
    font-size: 1.5rem;
  }

  ${mq('largeDesktop')} {
    font-size: 1.7rem;
  }
`;
