import styled from '@emotion/styled';
import * as C from './ignitus-Atoms/colors';
import * as F from './ignitus-Atoms/fonts';
import {minimumWidthQuery} from './ignitus-Atoms/media';
import {Heading2} from './ignitus-Atoms/typography';

export const Title = styled(Heading2)`
  color: ${C.IgnitusBlue};
`;

export const SubTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 500;
`;

export const Paragraph = styled.p`
  font-size: ${F.SM};
  font-weight: ${F.Light};
`;

/* Shared between partners & contirbutors component. */

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const BottomSection = styled.section`
  width: 100%;
  padding: 0 15px 0 15px;
  margin: 0 auto 0 auto;

  ${minimumWidthQuery[0]} {
    max-width: 540px;
  }
  ${minimumWidthQuery[1]} {
    max-width: 760px;
  }
  ${minimumWidthQuery[2]} {
    max-width: 960px;
  }
  ${minimumWidthQuery[3]} {
    max-width: 1140px;
  }
`;

export const BottomRow = styled.div`
  margin: 1rem 6rem;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  ${minimumWidthQuery[0]} {
    margin: 1rem 2rem;
  }
  ${minimumWidthQuery[1]} {
    margin: 1rem 2rem;
  }
  ${minimumWidthQuery[2]} {
    margin: 1rem 6rem;
  }
  ${minimumWidthQuery[3]} {
    margin: 1rem 6rem;
  }
`;

// We plan to use Container as parent element of in lot of components.
export const Container = styled.div`
  ${minimumWidthQuery[0]} {
    max-width: 540px;
  }
  ${minimumWidthQuery[1]} {
    max-width: 720px;
  }
  ${minimumWidthQuery[2]} {
    max-width: 960px;
  }
  ${minimumWidthQuery[3]} {
    max-width: 1140px;
  }
`;

export const Avatar = styled.img``;
export const Link = styled.a``;

export const flexibleColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const flexibleRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

/* Shared between partners & contirbutors component. */
