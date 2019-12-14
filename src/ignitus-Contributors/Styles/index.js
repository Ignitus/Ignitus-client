/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import * as C from '../../ignitus-Helpers/emotion-Styles/colors';
import * as F from '../../ignitus-Helpers/emotion-Styles/font';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const Wrapper = styled.div`
  margin: 1em 0 2em 0;
`;

export const Icon = styled.span`
  i { color: ${C.Red};}
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: ${F.Normal};;
  color: ${C.IgnitusBlue};
`;

export const Paragraph = styled.p`
  font-size: ${F.SM};
  font-weight: ${F.Light};
`;

export const BottomSection = styled.section`
  width: 100%;
  padding: 0 15px 0 15px;
  margin: 0 auto 0 auto;

  ${mq[0]} {
    max-width: 540px;
  }
  ${mq[1]} {
    max-width: 720px;
  }
  ${mq[2]} {
    max-width: 960px;
  }
  ${mq[3]} {
    max-width: 1140px;
  }
`;

export const BottomRow = styled.div`
  margin: 16px 88px 0 88px;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin: 0.5em;
  padding: 0.3em;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  height: 100px;
  background: ${C.White};;

  img {
    max-width: 100%;
    height: 75%;
    object-fit: contain;
    padding: 0.3em;
  }

  ${mq[0]} {
    flex: 0 0 43%;
    max-width: 43%;
  }
  ${mq[1]} {
    flex: 0 0 28.33333%;
    max-width: 28.33333%;
  }
  ${mq[2]} {
    flex: 0 0 30.33333%;
    max-width: 30.33333%;
  }
`;
