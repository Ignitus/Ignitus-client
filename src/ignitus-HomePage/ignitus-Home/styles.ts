import styled from '@emotion/styled';
import {ContainerBackground} from './constants';
import {minimumWidthQuery} from '../../ignitus-Shared';

export const HomeContainer = styled.section`
  background: url(${ContainerBackground}) no-repeat;
  background-size: 60%;
  background-position: top right;

  @media (max-width: 576px) {
    background: none;
  }

  ${minimumWidthQuery[2]} {
    background: none;
  }
  ${minimumWidthQuery[3]} {
    background: none;
  }
  ${minimumWidthQuery[4]} {
    background: url(${ContainerBackground}) no-repeat;
    background-size: 60%;
    background-position: top right;
  }
`;
export const Section = styled.section`
  margin: 4rem 0;
`;
