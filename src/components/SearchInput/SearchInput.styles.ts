import styled from 'styled-components';
import { mq, mqMax } from '../../styles/theme';
import FiSearch from '../../assets/icons/Search_alt_fill.svg';

export const Input = styled.input`
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryHover};
    outline: none;
  }

  ${mqMax('mobile')} {
    font-size: 0.9rem;
    height: 2.2rem;
    padding-right: 2.2rem;
  }

  ${mq('tablet')} {
    font-size: 1rem;
    height: 2.5rem;
    padding-right: 2.5rem;
  }

  ${mq('desktop')} {
    font-size: 1.05rem;
    height: 2.7rem;
    padding-right: 2.7rem;
  }

  ${mq('largeDesktop')} {
    font-size: 1.1rem;
    height: 3rem;
    padding-right: 3rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 448px;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const SearchIcon = styled(FiSearch)`
  font-size: 18px;

  ${mqMax('mobile')} {
    font-size: 16px;
  }

  ${mq('tablet')} {
    font-size: 18px;
  }

  ${mq('desktop')} {
    font-size: 20px;
  }

  ${mq('largeDesktop')} {
    font-size: 22px;
  }
`;
