import styled from 'styled-components';
import { mq, mqMax } from '../../../styles/theme';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1.5rem 0;

  ${mqMax('mobile')} {
    gap: 0.25rem;
    margin: 1rem 0;
  }

  ${mq('tablet')} {
    gap: 0.5rem;
    margin: 1.5rem 0;
  }

  ${mq('desktop')} {
    gap: 0.6rem;
    margin: 2rem 0;
  }

  ${mq('largeDesktop')} {
    gap: 0.75rem;
    margin: 2.5rem 0;
  }
`;

interface PageButtonProps {
  $active?: boolean;
  disabled?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primaryHover};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.primaryHover};
  color: ${({ $active }) => ($active ? '#fff' : '#ccc')};
  cursor: pointer;
  font-size: 0.85rem;
  min-width: 32px;

  svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    display: block;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    svg {
      stroke: #ccc;
      fill: #ccc;
    }
  }

  ${mqMax('mobile')} {
    padding: 0.3rem 0.5rem;
    font-size: 0.75rem;
    min-width: 28px;
    svg {
      width: 14px;
      height: 14px;
    }
  }

  ${mq('tablet')} {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
    min-width: 30px;
    svg {
      width: 16px;
      height: 16px;
    }
  }

  ${mq('desktop')} {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    min-width: 32px;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  ${mq('largeDesktop')} {
    padding: 0.55rem 0.9rem;
    font-size: 0.9rem;
    min-width: 36px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
