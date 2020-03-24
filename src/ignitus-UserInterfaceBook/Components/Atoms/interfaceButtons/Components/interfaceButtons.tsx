import React from 'react';
import {ButtonsContainer} from '../style';

import * as Button from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import {StyledHeading2, StyledHeading6} from '../../../../styles';

{
  /* https://miro.medium.com/max/2800/1*rPFTtW01pNiPF7nwuJER5Q.png */
}
const interfaceButttons = () => (
  <ButtonsContainer>
    <StyledHeading2> Buttons </StyledHeading2>
    <Button.PrimaryButton> Primary Button </Button.PrimaryButton>
    <Button.SecondaryButton> Secondary Button </Button.SecondaryButton>
    <Button.GreyButton> Grey Button </Button.GreyButton>
    <Button.OrangeButton> Orange Button </Button.OrangeButton>
    <Button.WhiteButton> White Button </Button.WhiteButton>
    <hr />
    <StyledHeading6> Medium Size Buttons </StyledHeading6>
    <Button.PrimaryButton medium> Medium Primary Button </Button.PrimaryButton>
    <Button.SecondaryButton medium> Secondary Button </Button.SecondaryButton>
    <Button.GreyButton medium> Grey Button </Button.GreyButton>
    <Button.OrangeButton medium> Orange Button </Button.OrangeButton>
    <Button.WhiteButton medium> White Button </Button.WhiteButton>
    <hr />
    <StyledHeading6> Small Size Buttons </StyledHeading6>
    <Button.PrimaryButton small> Small Primary Button </Button.PrimaryButton>
    <Button.SecondaryButton small> Secondary Button </Button.SecondaryButton>
    <Button.GreyButton small> Grey Button </Button.GreyButton>
    <Button.OrangeButton small> Orange Button </Button.OrangeButton>
    <Button.WhiteButton small> White Button </Button.WhiteButton>
    <hr />
    <StyledHeading6> Button States </StyledHeading6>
    <Button.DisabledButton disabled> Disabled State </Button.DisabledButton>
    <Button.DangerButton> Danger State </Button.DangerButton>
    <Button.YellowButton> Yellow Button </Button.YellowButton>
    <Button.GreenButton> Green Button </Button.GreenButton>
    <hr />
    <StyledHeading6> Text Button </StyledHeading6>
    <Button.TextButton> Text Button </Button.TextButton>
    <Button.TextButtonUnderline> Text Button </Button.TextButtonUnderline>
    <hr />
    <StyledHeading6> Styled Buttons </StyledHeading6>
    <Button.StyledButtonBottomRight>
      {' '}
      Styled Button Bottom Right{' '}
    </Button.StyledButtonBottomRight>
    <Button.StyledButtonTopLeft>
      {' '}
      Styled Button Top Left{' '}
    </Button.StyledButtonTopLeft>
    <hr />
    <StyledHeading6> Rounded Button </StyledHeading6>
    <Button.RoundedPrimaryButton>
      {' '}
      Rounded Primary Button{' '}
    </Button.RoundedPrimaryButton>
    <hr />
    <StyledHeading6> Social Buttons </StyledHeading6>
    <StyledHeading6> Button with Icons </StyledHeading6>
    <StyledHeading6> Floating Action Button </StyledHeading6>
    <StyledHeading6> Icon with text link</StyledHeading6>
    <StyledHeading6> Icon Button</StyledHeading6>
  </ButtonsContainer>
);

export default interfaceButttons;
