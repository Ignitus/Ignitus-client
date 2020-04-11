import styled from '@emotion/styled';
import {ContainerBackground} from './constants';
import {minimumWidthQuery} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';

export const HomeContainer = styled.section`
  background: url(${ContainerBackground}) no-repeat;
  background-size: 60%;
  background-position: top right;

  @media (max-width: 576px) {
    background: none;
  }

  ${minimumWidthQuery[0]} {
    background: none;
  }
  ${minimumWidthQuery[1]} {
    background: none;
  }
  ${minimumWidthQuery[2]} {
    background: url(${ContainerBackground}) no-repeat;
    background-size: 60%;
    background-position: top right;
  }
`;
export const Section = styled.section`
  margin: 4rem 0;
`;
