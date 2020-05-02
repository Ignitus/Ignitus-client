import styled from '@emotion/styled';
import * as F from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  minimumWidthQuery,
  Heading3,
  Paragraph as P,
  White,
  boxShadowColor,
} from '../../ignitus-Shared';

export const AboutSection = styled.section`
  font-weight: ${F.Normal};
  font-size: ${F.SM};
  background: url('https://storage.googleapis.com/ignitus_assets/ig-assets/splitBlueBackground.png')
    no-repeat;
  background-size: 57%;
  background-position: top right;
  padding-top: 5rem;
`;

export const AboutContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

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

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${minimumWidthQuery[0]} {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: none;
  }
  ${minimumWidthQuery[4]} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PictureContainer = styled.section`
  flex: 1;
  text-align: center;
`;

export const Img = styled.img`
  max-width: 100%;
  padding: 3rem;
  width: 22rem;

  ${minimumWidthQuery[0]} {
    width: 16rem;
  }
  ${minimumWidthQuery[2]} {
    width: 18rem;
  }
  ${minimumWidthQuery[3]} {
    width: 20rem;
  }
  ${minimumWidthQuery[5]} {
    width: 22rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${White};
  padding: 2rem;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
`;

export const Title = styled(Heading3)`
  text-align: center;
`;

export const ParagraphContainer = styled.div`
  margin-top: 1rem;
`;

export const Paragraph = styled(P)`
  margin-bottom: 0.7rem;
`;
