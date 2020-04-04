import styled from '@emotion/styled';
import Icon from '../../../ignitus-Utilities/Components/icon';

import {
  getPadding,
  getRadius,
  getFontSizes,
  BtnSizeProps,
} from '../../../ignitus-Utilities/HelperFunctions/emotionHelpers';
import {White, IgnitusBlue, SecondaryColor} from '../colors';
import {Button} from '../buttons';

export const ButtonWithIcon = styled(Button)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

export const PrimaryButtonWithIcon = styled(ButtonWithIcon)<BtnSizeProps>`
  color: ${White};
  background-color: ${IgnitusBlue};
  padding: ${props => getPadding(props)};
  font-size: ${props => getFontSizes(props)};
  border-radius: ${props => getRadius(props)};

  a {
    color: ${White};
  }

  svg {
    fill: ${White};
  }

  &:hover,
  &:focus {
    background-color: ${SecondaryColor};
    color: ${IgnitusBlue};

    a {
      color: ${IgnitusBlue};
    }

    svg {
      fill: ${IgnitusBlue};
    }
  }
`;

export const StyledIcon = styled(Icon)`
  height: 1rem;
  width: 1rem;
  fill: ${White};
  margin-left: 0.4rem;
`;
