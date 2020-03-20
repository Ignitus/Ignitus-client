import styled from '@emotion/styled';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  BtnSizeProps,
  getRadius,
  getFontSizes,
  getPadding,
} from '../../../ignitus-Shared/ignitus-Utilities/HelperFunctions/emotionHelpers';

export const ButtonsContainer = styled.div`
  padding: 3rem;
`;

export const Button = styled.button`
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  line-height: 1rem;
  margin: 5px;
  border: none;
  font-size: ${F.MD};
  font-weight: ${F.Normal};
  &:hover,
  &:focus {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.24);
  }
`;

export const PrimaryButton = styled(Button)<BtnSizeProps>`
  color: ${C.White};
  background-color: ${C.IgnitusBlue};
  padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: ${props => getRadius(props)};
  &:hover,
  &:focus {
    background-color: ${C.SecondaryColor};
    color: ${C.IgnitusBlue};
  }
`;

export const SecondaryButton = styled(Button)<BtnSizeProps>`
  color: ${C.IgnitusBlue};
  background-color: ${C.White};
  border: 2px solid ${C.IgnitusBlue};
  padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: ${props => getRadius(props)};
`;

export const WhiteButton = styled(Button)<BtnSizeProps>`
  color: ${C.IgnitusBlue};
  background-color: ${C.White};
  padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: ${props => getRadius(props)};
`;

export const GreyButton = styled(Button)<BtnSizeProps>`
  color: ${C.IgnitusBlue};
  background-color: ${C.GreyLight};
  padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: ${props => getRadius(props)};
  &:hover,
  &:focus {
    background-color: ${C.Grey2};
    color: ${C.IgnitusBlue};
  }
`;

export const OrangeButton = styled(Button)<BtnSizeProps>`
  color: ${C.IgnitusBlue};
  background-color: ${C.SecondaryColor};
  padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: ${props => getRadius(props)};
`;

export const DisabledButton = styled(Button)`
  color: ${C.GreySecondaryText};
  background-color: ${C.GreyLight};
  cursor: not-allowed;
`;

export const DangerButton = styled(Button)`
  color: ${C.White};
  background-color: ${C.Red};
`;

export const GreenButton = styled(Button)`
  color: ${C.White};
  background-color: ${C.Green};
`;

export const YellowButton = styled(Button)`
  color: ${C.GreySecondaryText};
  background-color: ${C.Yellow};
`;

export const TextButton = styled(Button)`
  color: ${C.IgnitusBlue};
  background-color: inherit;
  &:hover,
  &:focus {
    background-color: ${C.GreyLight};
    color: ${C.IgnitusBlue};
  }
`;

export const TextButtonUnderline = styled(Button)`
  color: ${C.IgnitusBlue};
  background-color: inherit;
  text-decoration: underline;
  &:hover,
  &:focus {
    background-color: ${C.GreyLight};
    color: ${C.IgnitusBlue};
  }
`;

export const StyledButtonBottomRight = styled(Button)`
  color: ${C.White};
  background-color: ${C.IgnitusBlue};
  border-radius: 0px 30px;
  &:hover,
  &:focus {
    background-color: ${C.SecondaryColor};
    color: ${C.IgnitusBlue};
  }
`;

export const StyledButtonTopLeft = styled(Button)`
  color: ${C.White};
  background-color: ${C.IgnitusBlue};
  border-radius: 30px 0px;
  &:hover,
  &:focus {
    background-color: ${C.SecondaryColor};
    color: ${C.IgnitusBlue};
  }
`;

export const RoundedPrimaryButton = styled(PrimaryButton)`
  border-radius: 30px;
`;
