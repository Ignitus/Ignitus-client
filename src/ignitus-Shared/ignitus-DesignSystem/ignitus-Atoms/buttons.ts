import styled from '@emotion/styled';
import * as C from './colors';
import * as F from './fonts';
import {
  ButtonProperties,
  getPadding,
  getFontSizes,
  getRadius,
  getColor,
  getBackgroundColor,
  getBorder,
  getHoverBackgroundColor,
  getHoverColor,
} from '../../ignitus-Utilities/HelperFunctions/emotionHelpers';

export const ButtonsContainer = styled.div`
  padding: 3rem;
`;

export const ParentButton = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 16px 32px;
  text-align: center;
  line-height: 1rem;
  margin: 0.5rem;
  outline: none;
  font-size: ${F.MD};
  font-weight: ${F.Normal};
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.24);
  }
`;

export const Button = styled(ParentButton)<ButtonProperties>`
  color: ${props => getColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: ${props => getRadius(props)};
  border: ${props => getBorder(props)};

  a {
    color: ${C.White};
  }

  &:hover,
  &:focus {
    background-color: ${props => getHoverBackgroundColor(props)};
    color: ${props => getHoverColor(props)};

    a {
      color: ${C.IgnitusBlue};
    }
  }
`;


export const DisabledButton = styled(ParentButton)`
  color: ${C.GreySecondaryText};
  background-color: ${C.GreyLight};
  cursor: not-allowed;
`;

export const DangerButton = styled(ParentButton)`
  color: ${C.White};
  background-color: ${C.Red};
`;

export const GreenButton = styled(ParentButton)`
  color: ${C.White};
  background-color: ${C.Green};
`;

export const YellowButton = styled(ParentButton)`
  color: ${C.GreySecondaryText};
  background-color: ${C.Yellow};
`;

export const TextButton = styled(ParentButton)`
  color: ${C.IgnitusBlue};
  background-color: inherit;
  &:hover,
  &:focus {
    background-color: ${C.GreyLight};
    color: ${C.IgnitusBlue};
  }
`;

export const TextButtonUnderline = styled(ParentButton)`
  color: ${C.IgnitusBlue};
  background-color: inherit;
  text-decoration: underline;
  &:hover,
  &:focus {
    background-color: ${C.GreyLight};
    color: ${C.IgnitusBlue};
  }
`;

export const StyledButtonBottomRight = styled(ParentButton)`
  color: ${C.White};
  background-color: ${C.IgnitusBlue};
  border-radius: 0px 30px;
  &:hover,
  &:focus {
    background-color: ${C.SecondaryColor};
    color: ${C.IgnitusBlue};
  }
`;

export const StyledButtonTopLeft = styled(ParentButton)`
  color: ${C.White};
  background-color: ${C.IgnitusBlue};
  border-radius: 30px 0px;
  &:hover,
  &:focus {
    background-color: ${C.SecondaryColor};
    color: ${C.IgnitusBlue};
  }
`;

export const RoundedButton = styled(Button)`
  border-radius: 30px;
`;
