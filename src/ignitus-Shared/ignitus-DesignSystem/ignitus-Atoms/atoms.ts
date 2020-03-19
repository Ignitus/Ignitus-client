import styled from '@emotion/styled';
import * as C from './colors';
import * as F from './fonts';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const Heading1 = styled.h1`
  font-weight: ${F.Medium};
  font-size: ${F.XXXL};
  color: ${C.IgnitusBlue};
`;

export const Heading2 = styled.h2`
  font-weight: ${F.Normal};
  font-size: ${F.XXL};
  color: ${C.IgnitusBlue};
`;

export const Heading3 = styled.h3`
  font-weight: ${F.Medium};
  font-size: ${F.XL};
  color: ${C.IgnitusBlue};
`;

export const Heading4 = styled.h4`
  font-weight: ${F.Normal};
  font-size: ${F.LG};
  color: ${C.IgnitusBlue};
`;

export const Heading5 = styled.h5`
  font-weight: ${F.Bold};
  font-size: ${F.MD};
  color: ${C.IgnitusBlue};
`;

export const Heading6 = styled.h6`
  font-weight: ${F.Medium};
  font-size: ${F.SM};
  color: ${C.IgnitusBlue};
`;

export const Paragraph = styled.p`
  font-size: ${F.SM};
  font-weight: ${F.Normal};
  color: ${C.GreyText};
  margin: 0;
`;

export const Separator = styled.hr`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  color: ${C.Grey1};
`;

export const Card = styled.a`
  display: block;
  height: auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: ${C.White};
`;

/* Shared between partners & contributors component. */

export const Wrapper = styled.div`
  margin: 1rem;
  margin-bottom: 2rem;
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
