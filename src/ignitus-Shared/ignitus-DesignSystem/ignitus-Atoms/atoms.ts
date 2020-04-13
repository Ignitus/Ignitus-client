import styled from '@emotion/styled';
import * as C from './colors';
import { minimumWidthQuery } from './media';

export const Separator = styled.hr`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  color: ${C.GreyOne};
`;

export const Card = styled.div`
  display: block;
  height: auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
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

// We plan to use Container as parent element of in lot of components.
export const Container = styled.div`
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

export const Avatar = styled.img``;
export const Link = styled.a``;

export const flexibleColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* Shared between partners & contributors component. */
