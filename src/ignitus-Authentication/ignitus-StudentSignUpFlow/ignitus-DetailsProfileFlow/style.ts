import styled from '@emotion/styled';
import {
  Container,
  flexibleRowDiv,
} from '../../../ignitus-Shared/ignitus-DesignSystem/shared';

import {
  Heading5,
  Paragraph,
  DefaultIconInput,
  DefaultCheckbox,
  DefaultInput,
} from '../../../ignitus-Shared';
import { TitleProps, IconProps } from './types';
import { Icon as I } from '../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import { DefaultTag2 } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultTag/Components';

export const ParentContainer = styled.div`
  background: ${C.White};
  border-radius: 2rem;
`;

export const InfoSection = styled.div`
  padding: 2rem;
`;
export const Section = styled(Container)`
  margin: 3rem 0 2rem 0;
`;

export const Title = styled(Heading5)<TitleProps>`
  font-weight: ${props =>
    props.fontStyle === 'paragraph' ? F.Medium : F.Bold};
  font-size: ${props => (props.fontStyle === 'paragraph' ? F.SM : F.XL)};
  color: ${props =>
    props.fontStyle === 'paragraph' ? C.GreyText : C.IgnitusBlue};
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
`;

export const Icon = styled(I)<IconProps>`
  width: ${({ size }) => size};
  fill: ${props => props.color};
  margin-right: 1rem;
  background-color: ${props => props.background};
  border-radius: 0.3rem;
`;

export const UniversityInfo = styled(Heading5)`
  font-weight: ${F.SemiBold};
  margin-right: 2rem;
`;

export const Address = styled(Paragraph)`
  font-size: ${F.MD};
  color: ${C.GreySecondaryText};
  margin: 0.2rem 0 0 1.2rem;
`;

export const Date = styled(Paragraph)`
  margin: 0.2rem 0 0 1.2rem;
`;

export const EducationInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 2rem;
`;

export const StyledTextArea = styled.textarea`
  background-color: ${C.GreyLight};
  padding: 1rem;
  color: ${C.GreySecondaryText};
  font-weight: ${F.SemiBold};
  font-size: ${F.MD};
  border: none;
  border-radius: 1rem;

  ::placeholder {
    color: ${C.GreySecondaryText};
    font-weight: ${F.SemiBold};
    font-size: ${F.MD};
    opacity: 0.5;
  }
`;

export const StyledArea = styled.div`
  background-color: ${C.GreyLight};
  padding: 0.5rem;
  border: none;
  border-radius: 1rem;
  font-weight: ${F.SemiBold};
  font-size: ${F.MD};
  height: 6rem;
`;

export const StyledDefaultIconInput = styled(DefaultIconInput)`
  flex-direction: row-reverse;
  svg {
    margin-right: 0.4rem;
  }
  margin: 0.5rem;
`;

export const StyledIconInput = styled(DefaultIconInput)`
  margin: 0 2rem 0 1rem;
`;
export const StyledDefaultCheckbox = styled(DefaultCheckbox)`
  background-color: ${C.IgnitusBlue};
`;
export const StyledDefaultInput = styled(DefaultInput)`
  padding: 1rem;
`;
export const DateContainer = styled(flexibleRowDiv)`
  margin: 1rem 0;
  justify-content: flex-start;
`;
export const HeadingContainer = styled(flexibleRowDiv)`
  justify-content: space-between;
`;

export const IconContainer = styled(flexibleRowDiv)``;
export const StyledParagraph = styled(Paragraph)`
  font-weight: ${F.Bold};
`;

export const SubTitle = styled(Paragraph)`
  margin-top: 1rem;
  font-size: ${F.XL};
`;
export const StyledDefaultTag2 = styled(DefaultTag2)`
  padding: 0.5rem;
`;

export const StyledText = styled(Paragraph)`
  color: ${C.GreyOne};
  margin: 0.5rem;
  font-size: ${F.XS};
`;

export const Circle = styled.span`
  background-color: ${C.IgnitusBlue};
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  margin: 0.3rem 0.5rem 0 0;
`;

export const PublicationInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const PublicationInputRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Publication = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
