import styled from 'styled-components';
import { mq } from '../../../styles/theme';
import FilterIcon from '../../assets/icons/Filter.svg';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 12px auto;
  width: 100%;
  max-width: 100%;

  & > *:first-child {
    flex: 1;
    min-width: 0;
  }

  & > *:last-child {
    flex-shrink: 0;
  }

  ${mq('tablet')} {
    gap: 12px;
    max-width: 700px;
    margin: 16px auto;
  }

  ${mq('desktop')} {
    gap: 16px;
    max-width: 900px;
    margin: 20px auto;
  }

  ${mq('largeDesktop')} {
    gap: 20px;
    max-width: 1200px;
    margin: 24px auto;
  }
`;

export const IconWrapper = styled(FilterIcon)`
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 24px;
  height: 24px;

  @media (max-width: 414px) {
    width: 18px;
    height: 18px;
  }
`;
