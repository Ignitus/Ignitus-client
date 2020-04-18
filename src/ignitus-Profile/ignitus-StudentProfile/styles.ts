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
  Heading6,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {TitleProps} from './types';

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

export const Title = styled(Heading5)<TitleProps>`
  padding: 0.5rem 2rem;
  font-weight: ${props =>
    props.fontStyle === 'paragraph' ? F.Medium : F.Bold};
  font-size: ${props => (props.fontStyle === 'paragraph' ? F.SM : F.MD)};
  color: ${props =>
    props.fontStyle === 'paragraph' ? C.GreyText : C.IgnitusBlue};
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
  margin-top: 1rem;
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

export const University = styled(Heading5)`
  color: ${C.Black};
  font-weight: ${F.SemiBold};
`;

export const Address = styled(Paragraph)`
  font-size: ${F.MD};
  color: ${C.GreySecondaryText};
  margin: 0.4rem 0;
`;

export const Date = styled(Paragraph)`
  margin: 0.4rem 0;
`;

export const ContributionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RecommendationsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

export const Name = styled(Heading5)`
  color: ${C.IgnitusBlue};
`;

export const Designation = styled(Heading6)`
  margin: 0.4rem 0;
`;

export const Experience = styled(Paragraph)`
  color: ${C.GreySecondaryText};
  flex: 1;
`;

export const BottomSection = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 2rem;
`;
