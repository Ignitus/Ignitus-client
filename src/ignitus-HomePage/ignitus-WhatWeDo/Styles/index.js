/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const Icon = styled.span`
  i { color: ${C.IgnitusBlue};}
`;

export const Card = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin: 0.5em;
  padding: 0.3em;
  display: flex;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  flex-direction: column;
  background: ${C.White};;

  ${mq[0]} {
    flex: 0 0 85%;
    max-width: 85%;
  }
  ${mq[1]} {
    flex: 0 0 45.33333%;
    max-width: 45.33333%;
  }
  ${mq[2]} {
    flex: 0 0 30.33333%;
    max-width: 30.33333%;
  }
`;

export const CardPicture = styled.img`
  max-width: 100%;
  height: 75%;
  object-fit: contain;
  padding: 0.3em;
  margin-bottom: 2em;
`;

export const CardText = styled.p`
  font-size: ${F.SM};
`;
