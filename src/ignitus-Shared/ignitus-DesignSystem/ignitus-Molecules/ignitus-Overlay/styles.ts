import styled from '@emotion/styled';
import confetti from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Svg/confetti.svg';
import {Paragraph as P} from '../../../../ignitus-Shared';
import {Button as B} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/styles';
import {
  MD,
  XS,
  Normal,
  Medium,
  GreySecondaryText,
  White,
  GreyOne,
  boxShadowColor,
} from '../../../../ignitus-Shared';
import { props } from './types';
import { flexibleColDiv } from '../../shared';


export const Overlay = styled.div`
  background-image: url(${confetti});
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

export const Paragraph = styled(P)<props>`
  color: ${props => (props.secondary ? GreyOne : GreySecondaryText)};
  font-weight: ${props => (props.secondary ? Normal : Medium)};
  font-size: ${props => (props.secondary ? XS : MD)};
  margin-top: ${props => (props.secondary ? '1.5rem' : '0')};
`;

export const Button = styled(B)`
  border-radius: 2rem;
`;
