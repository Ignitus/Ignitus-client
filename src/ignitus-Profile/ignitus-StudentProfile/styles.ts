import styled from '@emotion/styled';
import {
  Container,
  flexibleColDiv,
  flexibleRowDiv,
} from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import {default as I} from '../../ignitus-Shared/ignitus-Utilities/Components/icon';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {Avatar} from '../../ignitus-AboutPage/ignitus-Team/Styles';
import {
  Heading5,
  Paragraph,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const ParentContainer = styled(Container)`
  margin: 10rem auto;
  background: ${C.White};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const MiddleSection = styled.div`
  padding: 2rem;
`;
export const ElementContainer = styled(Container)`
  margin: 1.5rem 0;
`;

export const Title = styled(Heading5)`
  padding: 0.5rem 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled(I)`
  width: 1.5rem;
  fill: ${C.IgnitusBlue};
`;

export const Content = styled(Container)`
  margin-left: 3.6rem;
`;

export const AboutWrapper = styled.div`
  margin: 0.6rem 0;
`;

export const About = styled(Paragraph)`
  color: ${C.GreySecondaryText};
`;

export const EducationWrapper = styled.div`
  display: flex;
  margin: 0.6rem 0;
  flex-direction: column;
  justify-items: flex-start;
  align-items: baseline;
`;

export const University = styled(Paragraph)`
  font-size: ${F.MD};
  font-weight: ${F.SemiBold};
  color: ${C.Black};
  margin: 0.4rem 0;
`;

export const Address = styled(Paragraph)`
  font-size: ${F.MD};
  color: ${C.GreySecondaryText};
  margin: 0.4rem 0;
`;

export const Year = styled(Paragraph)`
  margin: 0.4rem 0;
`;

export const PublicationsText = styled.div`
  flex: 20;
  color: ${C.GreySecondaryText};
  font-size: ${F.XS};
  font-weight: ${F.SemiBold};
`;

export const PublicationsWrapper = styled.div`
  display: flex;
  margin: 0.7rem 0;
  flex-direction: row;
  justify-items: flex-start;
`;
export const PublicationsIconWrapper = styled.div`
  height: 1.3rem;
  width: 1.3rem;
  margin: 0 0.2rem 0 0;
  flex: 1;
`;
export const PublicationsStyledIcon = styled(Icon)`
  height: 1.3rem;
  width: 1.3rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
`;

export const ContributionsContainer = styled.div`
  display: flex;
  margin: 0.7rem 0;
  flex-direction: row;
  justify-items: flex-start;
  flex: 1;
`;

export const ContributionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-around;
  flex-wrap: wrap;
`;

export const ContributionsText = styled.div`
  flex: 5;
  color: ${C.GreySecondaryText};
  font-size: ${F.SM};
`;

export const ContributionsIconWrapper = styled.div`
  height: 1.3rem;
  width: 1.3rem;
  flex: 1;
`;

export const ContributionsStyledIcon = styled(Icon)`
  height: 1.3rem;
  width: 1.3rem;
  fill: ${C.IgnitusBlue};
  transition: 0.3s;
`;

export const RecommendationsWrapper = styled.div`
  display: flex;
  margin: 0.7rem 0;
  flex-direction: row;
  justify-items: space-evenly;
`;

export const RecommendationsProfile = styled(flexibleRowDiv)`
  flex-wrap: wrap;
  align-items: space-evenly;
  flex: 1;
`;

export const RecommendationsAvatar = styled(Avatar)`
  border-radius: 50%;
  border: none;
  margin: 2rem;
  flex: 1;
`;

export const RecommendationsDetails = styled(flexibleColDiv)`
  flex: 1;
  align-items: flex-start;
`;

export const Name = styled.p`
  color: ${C.IgnitusBlue};
  font-weight: ${F.Bold};
  font-size: ${F.XL};
  margin: 0;
  flex: 1;
`;

export const Designation = styled.p`
  color: ${C.IgnitusBlue};
  font-weight: ${F.Normal};
  font-size: ${F.MD};
  flex: 1;
  margin: 0;
`;

export const Date = styled.p`
  color: ${C.GreyOne};
  font-weight: ${F.Normal};
  font-size: ${F.MD};
  margin: 1rem 0 0 0;
  flex: 2;
`;

export const Experience = styled.p`
  padding: 0.5rem;
  color: ${C.GreySecondaryText};
  font-weight: ${F.Normal};
  background: transparent;
  font-size: ${F.SM};
  flex: 1;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
  margin: 1rem;
`;
