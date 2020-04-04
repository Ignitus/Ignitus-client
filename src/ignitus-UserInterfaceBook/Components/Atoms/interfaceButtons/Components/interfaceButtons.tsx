import React from 'react';
import {ButtonsContainer} from '../style';

import * as B from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import {StyledHeading2, StyledHeading6} from '../../../../styles';
import {DefaultButtonWithIcon} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultButtonWithIcon/Components';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/iconEnums';

{
  /* https://miro.medium.com/max/2800/1*rPFTtW01pNiPF7nwuJER5Q.png */
}
const interfaceButttons = () => (
  <ButtonsContainer>
    <StyledHeading2> Buttons </StyledHeading2>
    <B.Button size="large" category="primary">
      {' '}
      Primary Button{' '}
    </B.Button>
    <B.Button size="large" category="secondary">
      {' '}
      Secondary Button{' '}
    </B.Button>
    <B.Button size="large" category="grey">
      {' '}
      Grey Button{' '}
    </B.Button>
    <B.Button size="large" category="orange">
      {' '}
      Orange Button{' '}
    </B.Button>
    <B.Button size="large" category="white">
      {' '}
      White Button{' '}
    </B.Button>
    {/* <DefaultButtonWithIcon name={AppIcon.MessageIcon} content={'Message'}/> */}

    <hr />
    <StyledHeading6> Medium Size Buttons </StyledHeading6>
    <B.Button size="medium" category="primary">
      {' '}
      Primary Button{' '}
    </B.Button>
    <B.Button size="medium" category="secondary">
      {' '}
      Secondary Button{' '}
    </B.Button>
    <B.Button size="medium" category="grey">
      {' '}
      Grey Button{' '}
    </B.Button>
    <B.Button size="medium" category="orange">
      {' '}
      Orange Button{' '}
    </B.Button>
    <B.Button size="medium" category="white">
      {' '}
      White Button{' '}
    </B.Button>
    {/* <DefaultButtonWithIcon type="medium" name={AppIcon.MessageIcon} content={'Message'}/> */}
    <hr />
    <StyledHeading6> Small Size Buttons </StyledHeading6>
    <B.Button size="small" category="primary">
      {' '}
      Primary Button{' '}
    </B.Button>
    <B.Button size="small" category="secondary">
      {' '}
      Secondary Button{' '}
    </B.Button>
    <B.Button size="small" category="grey">
      {' '}
      Grey Button{' '}
    </B.Button>
    <B.Button size="small" category="orange">
      {' '}
      Orange Button{' '}
    </B.Button>
    <B.Button size="small" category="white">
      {' '}
      White Button{' '}
    </B.Button>

    <hr />
    <StyledHeading6> Button States </StyledHeading6>
    <B.DisabledButton disabled> Disabled State </B.DisabledButton>
    <B.DangerButton> Danger State </B.DangerButton>
    <B.YellowButton> Yellow Button </B.YellowButton>
    <B.GreenButton> Green Button </B.GreenButton>
    <hr />
    <StyledHeading6> Text Button </StyledHeading6>
    <B.TextButton> Text Button </B.TextButton>
    <B.TextButtonUnderline> Text Button </B.TextButtonUnderline>
    <hr />
    <StyledHeading6> Styled Buttons </StyledHeading6>
    <B.StyledButtonBottomRight>
      {' '}
      Styled Button Bottom Right{' '}
    </B.StyledButtonBottomRight>
    <B.StyledButtonTopLeft> Styled Button Top Left </B.StyledButtonTopLeft>
    <hr />
    <StyledHeading6> Rounded Button </StyledHeading6>
    <B.RoundedButton size="large" category="primary">
      {' '}
      Rounded Primary Button{' '}
    </B.RoundedButton>
    <hr />
    <StyledHeading6> Social Buttons </StyledHeading6>
    <StyledHeading6> Button with Icons </StyledHeading6>
    <StyledHeading6> Floating Action Button </StyledHeading6>
    <StyledHeading6> Icon with text link</StyledHeading6>
    <StyledHeading6> Icon Button</StyledHeading6>
  </ButtonsContainer>
);

export default interfaceButttons;
