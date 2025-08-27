import styled from 'styled-components';
import { mq } from '../../theme';
import FiSearch from '../../assets/icons/Search_alt_fill.svg';

export const Input = styled.input`
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 4px;
  border: 1px solid #49474e;
  width: 448px;
  height: 25px;
  font-size: 1rem;
  background-color: #1a191b;

  &:focus {
    border-color: #8e4ec6;
  }

  ${mq('mobile')} {
    width: 100%;
  }

  ${mq('tablet')} {
    width: 250px;
    font-size: 1rem;
  }

  ${mq('desktop')} {
    width: 300px;
    font-size: 1.1rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 18px;
  pointer-events: none;
`;
