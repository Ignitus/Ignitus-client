import styled from '@emotion/styled';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {
  XL,
  LG,
  Normal,
  MD,
  XS,
  SM,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {minimumWidthQuery} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';
import {Button as B} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import {Heading9} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  ${minimumWidthQuery[1]} {
    flex-direction: column;
    padding: 9rem 2rem;
  }

  ${minimumWidthQuery[2]} {
    flex-direction: column;
    padding: 9rem 6rem;
  }
  ${minimumWidthQuery[3]} {
    flex-direction: column;
    padding: 9rem 6rem;
  }
  ${minimumWidthQuery[4]} {
    flex-direction: row;
    padding: 9rem 6rem;
  }
`;

export const TitleImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled(Heading9)`
  color: ${C.IgnitusBlue};
  font-weight: 500;
  letter-spacing: 2px;
  margin: 1rem 0;
`;

export const PrimaryText = styled.p`
  color: ${C.Black};
  font-weight: ${Normal};
  margin: 1rem 0;

  ${minimumWidthQuery[1]} {
    font-size: ${XS};
  }
  ${minimumWidthQuery[2]} {
    font-size: ${SM};
  }
  ${minimumWidthQuery[3]} {
    font-size: ${MD};
  }
  ${minimumWidthQuery[4]} {
    font-size: ${XL};
  }
`;

export const SecondaryText = styled.p`
  color: ${C.Black};
  font-weight: ${Normal};
  margin: 1rem 0;

  ${minimumWidthQuery[1]} {
    font-size: ${XS};
  }
  ${minimumWidthQuery[2]} {
    font-size: ${SM};
  }
  ${minimumWidthQuery[3]} {
    font-size: ${MD};
  }
  ${minimumWidthQuery[4]} {
    font-size: ${LG};
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const RightSection = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
`;

export const Torch = styled.img`
  height: 6rem;
  margin-left: 2rem;
`;

export const Button = styled(B)`
  border-radius: 2rem;
  width: 10rem;
`;

export const Resume = styled.img`
  ${minimumWidthQuery[1]} {
    width: 12rem;
  }
  ${minimumWidthQuery[2]} {
    width: 14rem;
  }
  ${minimumWidthQuery[3]} {
    width: 16rem;
  }
  ${minimumWidthQuery[4]} {
    width: 18rem;
  }
`;
