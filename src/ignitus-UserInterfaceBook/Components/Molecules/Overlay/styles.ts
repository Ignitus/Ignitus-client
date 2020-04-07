import styled from '@emotion/styled';
import confetti from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/logo-Svg/confetti.svg';
import {flexibleColDiv} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import {Paragraph as P} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {
  ExtraBold,
  MD,
  Medium,
  SM,
  Bold,
  SemiBold,
  XS,
  Normal,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  GreyTwo,
  GreySecondaryText,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

type props = {
  secondary?: boolean;
};

export const OverlayContainer = styled.nav`
  padding: 2rem;
`;

export const Overlay = styled.div`
  /* background-image: url(${confetti}); */
  background-color: 'white';
  /* background-size: 'cover'; */
  display: inline-flex;
  border: 1px solid black;
`;

export const TopSection = styled(flexibleColDiv)`
  padding: 2rem;
`;

export const BottomSection = styled(flexibleColDiv)`
  padding: 2rem;
`;

export const Paragraph = styled(P)<props>`
  color: ${props => (props.secondary ? GreyTwo : GreySecondaryText)};
  font-weight: ${props => (props.secondary ? Normal : SemiBold)};
  font-size: ${props => (props.secondary ? XS : MD)};
  margin-top: ${props => (props.secondary ? '1.5rem' : '0')};
`;
