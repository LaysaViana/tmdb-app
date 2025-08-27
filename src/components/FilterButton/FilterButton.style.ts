import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  font-size: 1rem;
  background-color: #b744f714;
  backdrop-filter: blur(4px);

  &:hover {
    background: #b744f719;
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

export const FilterItem = styled.button`
  background-color: #8e4ec6;
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
