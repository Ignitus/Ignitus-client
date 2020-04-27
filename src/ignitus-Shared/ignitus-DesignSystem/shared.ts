import styled from '@emotion/styled';
import * as C from './ignitus-Atoms/colors';
import * as F from './ignitus-Atoms/fonts';
import { minimumWidthQuery } from './ignitus-Atoms/media';
import { Heading2 } from './ignitus-Atoms/typography';
import { Loading } from '../ignitus-Utilities/Components/loader';

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

/* Helpful to define max-width on different screen sizes. */
export const Container = styled.div`
  ${minimumWidthQuery[1]} {
    max-width: 320px;
  }
  ${minimumWidthQuery[2]} {
    max-width: 540px;
  }
  ${minimumWidthQuery[3]} {
    max-width: 720px;
  }
  ${minimumWidthQuery[4]} {
    max-width: 960px;
  }
  ${minimumWidthQuery[5]} {
    max-width: 1140px;
  }
`;

export const BootStrapSection = styled(Container)`
  width: 100%;
  padding: 0 15px 0 15px;
  margin: 0 auto;
`;

export const BottomRow = styled.div`
  margin: 1rem 6rem;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  ${minimumWidthQuery[1]} {
    margin: 1rem 2rem;
  }
  ${minimumWidthQuery[2]} {
    margin: 1rem 2rem;
  }
  ${minimumWidthQuery[3]} {
    margin: 1rem 2rem;
  }
  ${minimumWidthQuery[4]} {
    margin: 1rem 4rem;
  }
  ${minimumWidthQuery[5]} {
    margin: 1rem 6rem;
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

export const LazyLoader = styled(Loading)`
  height: 67vh;
  img {
    width: 15rem;
  }
`;
/* Shared between partners & contirbutors component. */
