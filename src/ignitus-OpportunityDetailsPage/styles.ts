import styled from '@emotion/styled';
import {
  White,
  boxShadowColor,
} from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { minimumWidthQuery } from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';

export const Container = styled.div`
  box-shadow: 0 0.5rem 1rem 0 ${boxShadowColor};
  background-color: ${White};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  padding: 2rem;
  margin-top: 1rem;
  ${minimumWidthQuery[3]} {
    width: 55rem;
  }
  ${minimumWidthQuery[4]} {
    max-width: 55rem;
  }
  ${minimumWidthQuery[5]} {
    max-width: 55rem;
  }
`;

export const Content = styled.div`
  padding: 1rem 1rem;
`;

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3rem 2rem;
  padding: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Column = styled.div`
  margin-right: 1.5rem;
  dislay: flex;
  flex-direction: column;
  justify-content: space-between;
`;
