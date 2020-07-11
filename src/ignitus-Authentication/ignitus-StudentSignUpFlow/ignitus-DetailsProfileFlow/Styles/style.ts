import styled from '@emotion/styled';
import {
  Container,
  flexibleRowDiv,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/shared';

import {
  Heading5,
  Paragraph,
  DefaultIconInput,
  DefaultCheckbox,
  DefaultInput,
} from '../../../../ignitus-Shared';
import { TitleProps, IconProps } from '../types';
import { Icon as I } from '../../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import * as C from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

export const TopMiddleSection = styled.div`
  margin-top: 1rem;
`;

export const ParentContainer = styled(Container)`
  margin: 10rem auto;
  background: ${C.White};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
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

export const Icon = styled(I)<IconProps>`
  width: 1.5rem;
  fill: ${props => props.color};
  margin: 0 0.5rem;
  background-color: ${props => props.background};
  border-radius: 0.3rem;
`;

export const Content = styled(Container)`
  margin-left: 3.6rem;
  margin-top: 1rem;
`;

export const University = styled(Heading5)`
  font-weight: ${F.SemiBold};
  margin-right: 2rem;
`;

export const Address = styled(Paragraph)`
  font-size: ${F.MD};
  color: ${C.GreySecondaryText};
  margin: 0.4rem 0;
`;

export const Date = styled(Paragraph)`
  margin: 0.4rem 0;
`;

export const LeftRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0.5rem 0 0 0;
`;

export const RightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const BottomSection = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 2rem;
`;

export const StyledTextArea = styled.textarea`
  background-color: ${C.GreyLight};
  padding-left: 1rem;
  color: ${C.GreySecondaryText};
  font-weight: ${F.SemiBold};
  font-size: ${F.MD};
  border: none;
  border-radius: 17px;

  ::placeholder {
    color: ${C.GreySecondaryText};
    font-weight: ${F.SemiBold};
    font-size: ${F.MD};
    opacity: 0.5;
`;

export const StyledArea = styled.div`
  background-color: ${C.GreyLight};
  padding-left: 1rem;
  border: none;
  border-radius: 17px;
  font-weight: ${F.SemiBold};
  font-size: ${F.MD};
  height: 10rem;
  width: 100%;
`;

export const StyledDefaultIconInput = styled(DefaultIconInput)`
  flex-direction: row-reverse;
  svg {
    margin-right: 0.4rem;
  }
  margin-left: 0.5rem;
`;

export const StyledIconInput = styled(DefaultIconInput)`
  margin: 0 2rem 0 1rem;
`;

export const InputContainer = styled.div`
  margin: 0 0 1rem 0;
  max-width: 700px;
`;

export const StyledDefaultCheckbox = styled(DefaultCheckbox)`
  background-color: ${C.IgnitusBlue};
`;

export const StyledDefaultInput = styled(DefaultInput)`
  margin: 1rem 0;
  padding: 1rem 0;
`;

export const DateContainer = styled(flexibleRowDiv)`
  margin: 0 0 1rem 0;
  justify-content: flex-start;
`;

export const HeadingContainer = styled(flexibleRowDiv)`
  margin: 0 0 1rem 0;
  justify-content: space-between;
`;

export const IconContainer = styled(flexibleRowDiv)``;
