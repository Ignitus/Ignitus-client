import styled from '@emotion/styled';
import Icon from '../../../ignitus-Utilities/Components/icon';
import {
  ButtonProperties,
  getColor,
  getIconDimension,
} from '../../../ignitus-Utilities/HelperFunctions/emotionHelpers';

export const StyledIcon = styled(Icon)<ButtonProperties>`
  width: ${props => getIconDimension(props)};
  fill: ${props => getColor(props)};
`;
