import styled from '@emotion/styled';
import { White, boxShadowColor } from '../../../ignitus-Atoms/colors';
import { flexibleColDiv } from '../../../shared';
import { CommonLayer } from '../Common/Layer';

export const SettingsContainer = styled(flexibleColDiv)`
  background: ${White};
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  width: 14rem;
  height: 22rem;
`;

export const Layer = styled(CommonLayer)`
  text-align: center;
`;
