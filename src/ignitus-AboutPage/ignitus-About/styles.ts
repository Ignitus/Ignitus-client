import styled from '@emotion/styled';
import * as F from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {minimumWidthQuery} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';
import {
  Heading3,
  Paragraph as P,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import { White } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { flexibleColDiv } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';

export const AboutSection = styled.section`
  font-weight: ${F.Normal};
  font-size: ${F.SM};
  background: url('https://storage.googleapis.com/ignitus_assets/ig-assets/splitBlueBackground.png')
    no-repeat;
  background-size: 70%;
  background-position: top right;
  padding-top: 3rem;
`;

export const AboutContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

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

export const TopSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const PictureContainer = styled.section`
  flex: 1;
`;

export const Img = styled.img`
  max-width: 100%;
  padding: 3rem;
`;

export const ContentContainer = styled(flexibleColDiv)`
  flex: 1;
  border-radius: 1rem;
  margin-top: 2rem;
  background-color: ${White};
  padding: 0 1.5rem;
`;

export const Title = styled(Heading3)`
  text-align: center;
`;

export const ParagraphContainer = styled.div``;

export const Paragraph = styled(P)`
  margin-bottom: 0.7rem;
`;
