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
  outline: none;
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
    box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  }
`;

export const Button = styled(ParentButton)<ButtonProperties>`
  outline: none;
  color: ${props => getColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: ${props => getRadius(props)};
  border: ${props => getBorder(props)};

  a {
    color: ${props => getColor(props)};
  }

  &:hover,
  &:focus {
    background-color: ${props => getHoverBackgroundColor(props)};
    color: ${props => getHoverColor(props)};
    outline: none;

    a {
      color: ${C.IgnitusBlue};
    }

    svg {
      fill: ${C.IgnitusBlue};
    }
  }
`;

export const ButtonBottomRight = styled(Button)`
  border-radius: 0px 30px;
`;

export const StyledButtonTopLeft = styled(Button)`
  border-radius: 30px 0px;
`;

export const RoundedButton = styled(Button)`
  border-radius: 30px;
`;
