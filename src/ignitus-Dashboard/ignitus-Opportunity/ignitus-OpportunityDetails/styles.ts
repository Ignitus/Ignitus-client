import styled from '@emotion/styled';
import { minimumWidthQuery } from '../../../ignitus-Shared';
import {
  White,
  boxShadowColor,
} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

export const BottomColumn = styled.div`
  box-shadow: 0 0.5rem 1rem 0 ${boxShadowColor};
  background-color: ${White};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-top: 1rem;
`;

export const Content = styled.div`
  padding: 1rem 0rem;
`;

export const Container = styled.div`
  display: flex;
  margin: 3rem;
  padding: 2rem;

  ${minimumWidthQuery[0]} {
    flex-direction: column;
  }
  ${minimumWidthQuery[3]} {
    flex-direction: column;
  }
  ${minimumWidthQuery[4]} {
    flex-direction: row;
  }
  ${minimumWidthQuery[5]} {
    flex-direction: row;
  }
`;

export const RowOne = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

export const RowTwo = styled.div`
  margin: 1rem;
`;

export const Dot = styled.span``;
