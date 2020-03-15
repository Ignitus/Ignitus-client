import styled from '@emotion/styled';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';
import * as F from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

const breakpoints: number[] = [576, 768, 992, 1200];
const mq: string[] = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const AboutSection = styled.section`
  font-weight: ${F.Normal};
  font-size: ${F.SM};
  background: url('https://storage.googleapis.com/ignitus_assets/ig-assets/Assets_split-blue-background.png')
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

export const ContentContainer = styled.section`
  flex: 1;
  border-radius: 16px;
  margin-top: 30px;
  background-color: #fff;
  padding: 1.5rem;
`;

export const Title = styled(T.Title)`
  text-align: center;
`;

export const ParagraphContainer = styled.div``;
