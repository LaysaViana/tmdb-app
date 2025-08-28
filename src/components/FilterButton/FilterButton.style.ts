import styled from 'styled-components';
import { mq, mqMax } from '../../styles/theme';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.primaryHover};
  cursor: pointer;
  font-size: 1rem;
  backdrop-filter: blur(4px);

  svg {
    fill: white;
    width: 20px;
    height: 20px;

    ${mqMax('mobile')} {
      width: 16px;
      height: 16px;
    }

    ${mq('tablet')} {
      width: 20px;
      height: 20px;
    }

    ${mq('desktop')} {
      width: 22px;
      height: 22px;
    }

    ${mq('largeDesktop')} {
      width: 24px;
      height: 24px;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background2};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FilterList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s;
`;

interface FilterItemProps {
  $active?: boolean;
}

export const FilterItem = styled.button<FilterItemProps>`
  background-color: ${({ $active }) => ($active ? '#3d223e' : '#8e4ec6')};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #3d224e;
  }
`;
