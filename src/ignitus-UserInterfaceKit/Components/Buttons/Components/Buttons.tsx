import React from 'react';
import {ButtonsContainer} from '../style';
import {
  Heading6,
  Heading4,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as Button from '../style';

const Buttons = () => (
  <ButtonsContainer>
    <Heading4> Buttons </Heading4>
    <Button.PrimaryButton> Primary Button </Button.PrimaryButton>
    <Button.SecondaryButton> Secondary Button </Button.SecondaryButton>
    <Button.GreyButton> Grey Button </Button.GreyButton>
    <Button.OrangeButton> Orange Button </Button.OrangeButton>
    <Button.WhiteButton> White Button </Button.WhiteButton>
    <Heading6> Medium Sized Buttons </Heading6>
    <Button.MediumPrimaryButton>
      {' '}
      Medium Primary Button{' '}
    </Button.MediumPrimaryButton>
    <Heading6> Small Sized Buttons </Heading6>
    <Button.SmallPrimaryButton>
      {' '}
      Small Primary Button{' '}
    </Button.SmallPrimaryButton>
    <Heading6> Button States </Heading6>
    <Button.DisabledButton> Disabled State </Button.DisabledButton>
    <Button.DangerButton> Danger State </Button.DangerButton>
    <Button.YellowButton> Yellow Button </Button.YellowButton>
    <Button.GreenButton> Green Button </Button.GreenButton>
    <Heading6> Text Button </Heading6>
    <Button.TextButton> Text Button </Button.TextButton>
    <Button.TextButtonUnderline> Text Button </Button.TextButtonUnderline>
    <Heading6> Styled Buttons </Heading6>
    <Button.StyledButtonBottomRight>
      {' '}
      Styled Button Bottom Right{' '}
    </Button.StyledButtonBottomRight>
    <Button.StyledButtonTopLeft>
      {' '}
      Styled Button Top Left{' '}
    </Button.StyledButtonTopLeft>
    <Heading6> Rounded Button </Heading6>
    <Button.RoundedPrimaryButton>
      {' '}
      Rounded Primary Button{' '}
    </Button.RoundedPrimaryButton>
    <Heading6> Social Buttons </Heading6>
    <Heading6> Button with Icons </Heading6>
    <Heading6> Floating Action Button </Heading6>
    <Heading6> Icon with text link</Heading6>
    <Heading6> Icon Button</Heading6>
  </ButtonsContainer>
);

export default Buttons;
