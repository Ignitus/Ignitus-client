import styled from '@emotion/styled';

import { Icon } from '../../../ignitus-Utilities/Components/icon';
import * as B from '../../ignitus-Atoms/buttons';

export const ButtonLeft = styled(B.Button)`
  font-weight: 600;
  margin: 0;
  border: 0;
  float: left;
  border-radius: 20px 0 0 20px;
`;

export const ButtonRight = styled(B.Button)`
  font-weight: 600;
  margin: 0;
  border: 0;
  float: left;
  border-radius: 0 20px 20px 0;
`;

export const ToggleButtonContainer = styled.span`
  cursor: pointer;
`;

export const StyledIcon = styled(Icon)`
  width: 1.4rem;
  fill: ${props => props.color};
  transition: 0.3s;
  flex: 1;
  margin: 0.03rem;
`;
