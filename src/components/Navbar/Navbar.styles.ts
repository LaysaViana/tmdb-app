import styled from 'styled-components';
import { mq } from '../../theme';

export const Nav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};

  ${mq('tablet')} {
    padding: 1rem 2rem;
  }

  ${mq('desktop')} {
    padding: 1rem 3rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};

    ${mq('tablet')} {
      font-size: 1.8rem;
    }

    ${mq('desktop')} {
      font-size: 2rem;
    }
  }
`;

export const AppIcon = styled.img`
  width: 40px;
  height: 40px;

   ${mq('tablet')} {
    width: 50px;
    height: 50px;
  }
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
