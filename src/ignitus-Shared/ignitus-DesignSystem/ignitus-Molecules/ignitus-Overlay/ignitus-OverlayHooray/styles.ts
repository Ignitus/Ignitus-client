import styled from '@emotion/styled';
import {
  Paragraph as P,
  MD,
  XS,
  Normal,
  Medium,
  GreySecondaryText,
  White,
  GreyOne,
  boxShadowColor,
} from '../../../..';
import { Button as B } from '../../../ignitus-Atoms/ignitus-defaultMulti/styles';

import { Props } from './types';
import { flexibleColDiv } from '../../../shared';

export const Overlay = styled.div`
  background-image: url('https://storage.googleapis.com/ignitus_assets/ig-assets/confetti.svg');
  background-color: ${White};
  background-size: contain;
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
`;

export const TopSection = styled(flexibleColDiv)`
  padding: 2rem;
`;

export const BottomSection = styled(flexibleColDiv)`
  padding: 0 1.5rem 1.5rem;
  align-items: flex-end;
`;

export const Paragraph = styled(P)<Props>`
  color: ${props => (props.secondary ? GreyOne : GreySecondaryText)};
  font-weight: ${props => (props.secondary ? Normal : Medium)};
  font-size: ${props => (props.secondary ? XS : MD)};
  margin-top: ${props => (props.secondary ? '1.5rem' : '0')};
`;

export const Button = styled(B)`
  border-radius: 2rem;
`;
