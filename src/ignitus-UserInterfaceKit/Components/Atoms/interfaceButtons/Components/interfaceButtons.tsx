import React from 'react';
import {ButtonsContainer} from '../style';

import * as Button from '../style';
import {Heading2, Heading6} from '../../../userInterfaceKit/styles';

{/* https://miro.medium.com/max/2800/1*rPFTtW01pNiPF7nwuJER5Q.png */}
const interfaceButttons = () => (
  <ButtonsContainer>
    <Heading2> Buttons </Heading2>
    <Button.PrimaryButton> Primary Button </Button.PrimaryButton>
    <Button.SecondaryButton> Secondary Button </Button.SecondaryButton>
    <Button.GreyButton> Grey Button </Button.GreyButton>
    <Button.OrangeButton> Orange Button </Button.OrangeButton>
    <Button.WhiteButton> White Button </Button.WhiteButton>
    <hr />
    <Heading6> Medium Size Buttons </Heading6>
    <Button.PrimaryButton medium> Medium Primary Button </Button.PrimaryButton>
    <Button.SecondaryButton medium> Secondary Button </Button.SecondaryButton>
    <Button.GreyButton medium> Grey Button </Button.GreyButton>
    <Button.OrangeButton medium> Orange Button </Button.OrangeButton>
    <Button.WhiteButton medium> White Button </Button.WhiteButton>
    <hr />
    <Heading6> Small Size Buttons </Heading6>
    <Button.PrimaryButton small> Small Primary Button </Button.PrimaryButton>
    <Button.SecondaryButton small> Secondary Button </Button.SecondaryButton>
    <Button.GreyButton small> Grey Button </Button.GreyButton>
    <Button.OrangeButton small> Orange Button </Button.OrangeButton>
    <Button.WhiteButton small> White Button </Button.WhiteButton>
    <hr />
    <Heading6> Button States </Heading6>
    <Button.DisabledButton disabled> Disabled State </Button.DisabledButton>
    <Button.DangerButton> Danger State </Button.DangerButton>
    <Button.YellowButton> Yellow Button </Button.YellowButton>
    <Button.GreenButton> Green Button </Button.GreenButton>
    <hr />
    <Heading6> Text Button </Heading6>
    <Button.TextButton> Text Button </Button.TextButton>
    <Button.TextButtonUnderline> Text Button </Button.TextButtonUnderline>
    <hr />
    <Heading6> Styled Buttons </Heading6>
    <Button.StyledButtonBottomRight>
      {' '}
      Styled Button Bottom Right{' '}
    </Button.StyledButtonBottomRight>
    <Button.StyledButtonTopLeft>
      {' '}
      Styled Button Top Left{' '}
    </Button.StyledButtonTopLeft>
    <hr />
    <Heading6> Rounded Button </Heading6>
    <Button.RoundedPrimaryButton>
      {' '}
      Rounded Primary Button{' '}
    </Button.RoundedPrimaryButton>
    <hr />
    <Heading6> Social Buttons </Heading6>
    <Heading6> Button with Icons </Heading6>
    <Heading6> Floating Action Button </Heading6>
    <Heading6> Icon with text link</Heading6>
    <Heading6> Icon Button</Heading6>
  </ButtonsContainer>
);

export default interfaceButttons;
