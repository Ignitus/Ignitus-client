import styled from '@emotion/styled';
import * as C from './colors';
import * as F from './fonts';
import {minimumWidthQuery} from './media';

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

export const Heading9 = styled.h6`
  font-weight: ${F.Medium};
  color: ${C.IgnitusBlue};

  ${minimumWidthQuery[1]} {
    font-size: ${F.XXXL};
  }
  ${minimumWidthQuery[2]} {
    font-size: ${F.XXXXXL};
  }
  ${minimumWidthQuery[3]} {
    font-size: ${F.XXXXXXL};
  }
  ${minimumWidthQuery[4]} {
    font-size: ${F.XXXXXXXL};
  }
`;

export const Paragraph = styled.p`
  font-size: ${F.SM};
  font-weight: ${F.Normal};
  color: ${C.GreyText};
  margin: 0;
`;

export const TextLink = styled.a`
  font-size: ${F.SM};
  font-weight: ${F.Normal};
  color: ${C.GreyText};
  margin: 0;
`;
