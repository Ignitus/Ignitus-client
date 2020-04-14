import styled from '@emotion/styled';
import * as C from './colors';
import * as F from './fonts';
import {minimumWidthQuery} from './media';

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

export const Heading1 = styled.h1`
  font-weight: ${F.Light};
  letter-spacing: -1.5px;
  color: ${C.IgnitusBlue};
  ${minimumWidthQuery[5]} {
    font-size: 40px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 38px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 36px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 34px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 32px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 30px;
  }
`;

export const Heading2 = styled.h2`
  font-weight: ${F.Light};
  letter-spacing: -0.5px;
  color: ${C.IgnitusBlue};
  ${minimumWidthQuery[5]} {
    font-size: 34px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 32px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 30px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 28px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 26px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 24px;
  }
`;

export const Heading3 = styled.h3`
  font-weight: ${F.Normal};
  letter-spacing: 0px;
  color: ${C.IgnitusBlue};
  ${minimumWidthQuery[0]} {
    font-size: 32px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 30px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 28px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 26px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 24px;
  }
  ${minimumWidthQuery[5]} {
    font-size: 22px;
  }
`;

export const Heading4 = styled.h4`
  font-weight: ${F.Normal};
  letter-spacing: 0.25px;
  color: ${C.IgnitusBlue};
  ${minimumWidthQuery[0]} {
    font-size: 30px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 28px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 26px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 24px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 22px;
  }
  ${minimumWidthQuery[5]} {
    font-size: 20px;
  }
`;

export const Heading5 = styled.h5`
  font-weight: ${F.Normal};
  letter-spacing: 0px;
  color: ${C.IgnitusBlue};
  ${minimumWidthQuery[0]} {
    font-size: 28px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 26px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 24px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 22px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 20px;
  }
  ${minimumWidthQuery[5]} {
    font-size: 18px;
  }
`;

export const Heading6 = styled.h6`
  font-weight: ${F.Medium};
  letter-spacing: 0.15px;
  color: ${C.IgnitusBlue};
  ${minimumWidthQuery[5]} {
    font-size: 22px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 22px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 20px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 20px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 18px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 16px;
  }
`;

export const Subtitle1 = styled.p`
  font-weight: ${F.Normal};
  letter-spacing: 0.15px;
  ${minimumWidthQuery[5]} {
    font-size: 18px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 16px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 16px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 16px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 14px;
  }
`;

export const Subtitle2 = styled.p`
  font-weight: ${F.Medium};
  letter-spacing: 0.1px;
  ${minimumWidthQuery[5]} {
    font-size: 16px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 16px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 12px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 12px;
  }
`;


export const Body1 = styled.p`
  font-weight: ${F.Normal};
  letter-spacing: 0.5px;
  ${minimumWidthQuery[5]} {
    font-size: 22px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 22px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 20px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 20px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 18px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 14px;
  }
`;

export const Body2 = styled.p`
  font-weight: ${F.Normal};
  letter-spacing: 0.25px;
  ${minimumWidthQuery[5]} {
    font-size: 20px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 18px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 16px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 12px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  font-weight: ${F.Medium};
  letter-spacing: 1.25px;
  ${minimumWidthQuery[5]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 12px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 12px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 12px;
  }
`;

export const Caption = styled.p`
  font-weight: ${F.Normal};
  letter-spacing: 0px;
  ${minimumWidthQuery[5]} {
    font-size: 18px;
  }
  ${minimumWidthQuery[4]} {
    font-size: 16px;
  }
  ${minimumWidthQuery[3]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[2]} {
    font-size: 14px;
  }
  ${minimumWidthQuery[1]} {
    font-size: 12px;
  }
  ${minimumWidthQuery[0]} {
    font-size: 12px;
  }
`;
