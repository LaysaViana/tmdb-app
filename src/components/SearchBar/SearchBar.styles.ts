import styled from 'styled-components';
import { mq } from '../../theme';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 16px 0;

  ${mq('mobile')} {
    flex-direction: column;
    gap: 12px;
  }

  ${mq('tablet')} {
    flex-direction: row;
    gap: 16px;
  }

  ${mq('desktop')} {
    max-width: 1200px;
    margin: 16px auto;
  }
`;
