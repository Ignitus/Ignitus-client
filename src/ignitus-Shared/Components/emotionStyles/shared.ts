import styled from '@emotion/styled';
import * as C from './colors';
import * as F from './font';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const Title = styled.h3`
  font-weight: ${F.Normal};
  color: ${C.IgnitusBlue};
`;

export const SubTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 500;
`

export const Paragraph = styled.p`
  font-size: ${F.SM};
  font-weight: ${F.Light};
`;

/* Shared between partners & contirbutors component. */

export const Wrapper = styled.div`
  margin: 1em;
  margin-bottom: 2em;
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin: 16px 90px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

// We plan to use Container as parent element of in lot of components.
export const Container = styled.div`
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

export const Avatar = styled.img``;
export const Link = styled.a``;

export const flexibleColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* Shared between partners & contirbutors component. */
