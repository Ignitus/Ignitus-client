import styled from '@emotion/styled';
import confetti from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/logo-Svg/confetti.svg';
import {flexibleColDiv} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import {Paragraph as P} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {Button as B} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/styles';
import {
  MD,
  XS,
  Normal,
  Medium,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  GreySecondaryText,
  White,
  GreyOne,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

type props = {
  secondary?: boolean;
};

export const OverlayContainer = styled.nav`
  padding: 2rem;
`;

export const Overlay = styled.div`
  background-image: url(${confetti});
  background-color: ${White};
  background-size: contain;
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
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
