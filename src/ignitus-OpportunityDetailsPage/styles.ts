import styled from '@emotion/styled';
import {
  White,
  boxShadowColor,
} from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { minimumWidthQuery } from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';

export const Container = styled.div`
  box-shadow: 0 0.5rem 1rem 0 ${boxShadowColor};
  background-color: ${White};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${minimumWidthQuery[0]} {
    margin: 4rem 1rem 1rem 1rem;
    width: 100%;
  }
  ${minimumWidthQuery[2]} {
    margin: 4rem 3rem 1rem 3rem;
    width: 100%;
  }
  ${minimumWidthQuery[3]} {
    margin: 4rem 1.5rem 1rem 1.5rem;
    width: 100%;
  }
  ${minimumWidthQuery[4]} {
    margin: 4rem 2rem 1rem 2rem;
    max-width: 100%;
  }
  ${minimumWidthQuery[5]} {
    margin: 5rem 5rem 1rem 5rem;
    max-width: 55rem;
  }
`;

export const Content = styled.div`
  margin: 1rem;
`;
