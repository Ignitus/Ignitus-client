import styled from '@emotion/styled';

import {
  White,
  IgnitusBlue,
  boxShadowColor,
} from '../../../ignitus-Atoms/colors';
import { flexibleColDiv } from '../../../shared';
import Icon from '../../../../ignitus-Utilities/Components/icon';
import { CommonLayer } from '../Common/Layer';

export const SettingsContainer = styled(flexibleColDiv)`
  background: ${White};
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  width: 14rem;
`;

export const Layer = styled(CommonLayer)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const SideNavIcon = styled(Icon)`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${IgnitusBlue};
  margin: 0 1rem;
`;
