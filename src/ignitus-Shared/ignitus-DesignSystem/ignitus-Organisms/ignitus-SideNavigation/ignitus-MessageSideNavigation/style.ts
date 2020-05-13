import styled from '@emotion/styled';
import { White, Red, boxShadowColor } from '../../../ignitus-Atoms/colors';
import { XS } from '../../../ignitus-Atoms/fonts';
import { flexibleColDiv } from '../../../shared';
import { CommonLayer } from '../Common/Layer';

export const MessageContainer = styled(flexibleColDiv)`
  background: ${White};
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  width: 14rem;
  height: 16rem;
`;

export const Layer = styled(CommonLayer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p,
  div {
    margin: 0 1rem;
  }
`;

export const Notification = styled(flexibleColDiv)`
  border-radius: 100%;
  padding: 0.2rem;
  background: ${Red};
  width: 1.5rem;
  height: 1.5rem;
  font-size: ${XS};
  color: ${White};
`;
