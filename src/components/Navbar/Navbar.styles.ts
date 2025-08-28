import styled from 'styled-components';
import { mq, mqMax } from '../../styles/theme';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;

  ${mq('tablet')} {
    padding: 1rem 1.5rem;
  }

  ${mq('desktop')} {
    padding: 1.25rem 2rem;
  }

  ${mq('largeDesktop')} {
    padding: 1.5rem 3rem;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  ${mq('tablet')} {
    gap: ${({ theme }) => theme.spacing.md};
  }

  h1 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.3rem;

    ${mqMax('mobile')} {
      font-size: 1.1rem;
    }

    ${mq('tablet')} {
      font-size: 1.5rem;
    }

    ${mq('desktop')} {
      font-size: 1.8rem;
    }

    ${mq('largeDesktop')} {
      font-size: 2rem;
    }
  }
`;

export const AppIcon = styled.img`
  width: 35px;
  height: 35px;

  ${mqMax('mobile')} {
    width: 30px;
    height: 30px;
  }

  ${mq('tablet')} {
    width: 40px;
    height: 40px;
  }

  ${mq('desktop')} {
    width: 50px;
    height: 50px;
  }

  ${mq('largeDesktop')} {
    width: 60px;
    height: 60px;
  }
`;

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background2};
  border: 1px solid ${({ theme }) => theme.colors.background2};
  border-radius: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  svg {
    width: 20px;
    height: 20px;

    ${mqMax('mobile')} {
      width: 16px;
      height: 16px;
    }

    ${mq('tablet')} {
      width: 18px;
      height: 18px;
    }

    ${mq('desktop')} {
      width: 20px;
      height: 20px;
    }

    ${mq('largeDesktop')} {
      width: 24px;
      height: 24px;
    }
  }

  ${mqMax('mobile')} {
    padding: 0.3rem;
  }

  ${mq('tablet')} {
    padding: 0.4rem;
  }

  ${mq('desktop')} {
    padding: 0.5rem;
  }

  ${mq('largeDesktop')} {
    padding: 0.6rem;
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  svg {
    height: auto;
    max-width: 100%;
  }

  ${mqMax('mobile')} {
    svg {
      width: 100px;
    }
  }

  ${mq('tablet')} {
    svg {
      width: 150px;
    }
  }

  ${mq('desktop')} {
    svg {
      width: 200px;
    }
  }

  ${mq('largeDesktop')} {
    svg {
      width: 240px;
    }
  }
`;
