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

    <B.Button size="large" category="disabled">
      {' '}
      Disabled Button{' '}
    </B.Button>

    <B.Button size="large" category="red">
      {' '}
      Red Button{' '}
    </B.Button>

    <B.Button size="large" category="green">
      {' '}
      Green Button{' '}
    </B.Button>

    <B.Button size="large" category="yellow">
      {' '}
      Yellow Button{' '}
    </B.Button>

    <DefaultButtonWithIcon
      size="large"
      category="primary"
      name={AppIcon.MessageIcon}
      content={'Message'}
    />

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

    <B.Button size="medium" category="disabled">
      {' '}
      Disabled Button{' '}
    </B.Button>

    <B.Button size="medium" category="red">
      {' '}
      Red Button{' '}
    </B.Button>

    <B.Button size="medium" category="green">
      {' '}
      Green Button{' '}
    </B.Button>

    <B.Button size="medium" category="yellow">
      {' '}
      Yellow Button{' '}
    </B.Button>

    <DefaultButtonWithIcon
      size="medium"
      category="primary"
      name={AppIcon.MessageIcon}
      content={'Message'}
    />

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

    <B.Button size="small" category="disabled">
      {' '}
      Disabled Button{' '}
    </B.Button>

    <B.Button size="small" category="red">
      {' '}
      Red Button{' '}
    </B.Button>

    <B.Button size="small" category="green">
      {' '}
      Green Button{' '}
    </B.Button>

    <B.Button size="small" category="yellow">
      {' '}
      Yellow Button{' '}
    </B.Button>

    <DefaultButtonWithIcon
      size="small"
      category="primary"
      name={AppIcon.MessageIcon}
      content={'Message'}
    />

    <hr />
    <StyledHeading6> Text Button </StyledHeading6>
    <B.Button size="large" category="text">
      {' '}
      Text Button{' '}
    </B.Button>
    <B.Button size="medium" category="text">
      {' '}
      Text Button{' '}
    </B.Button>
    <B.Button size="small" category="text">
      {' '}
      Text Button{' '}
    </B.Button>
    <hr />

    <StyledHeading2> Styled Buttons </StyledHeading2>

    <B.ButtonBottomRight size="large" category="primary">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="large" category="secondary">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="large" category="grey">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="large" category="orange">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.StyledButtonTopLeft size="large" category="primary">
      {' '}
      Button Top Left{' '}
    </B.StyledButtonTopLeft>

    <StyledHeading6> Medium Size Buttons </StyledHeading6>

    <B.ButtonBottomRight size="medium" category="primary">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="medium" category="secondary">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="medium" category="grey">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="medium" category="orange">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <StyledHeading6> Small Size Buttons </StyledHeading6>

    <B.ButtonBottomRight size="small" category="primary">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="small" category="secondary">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="small" category="grey">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.ButtonBottomRight size="small" category="orange">
      {' '}
      Button Bottom Right{' '}
    </B.ButtonBottomRight>

    <B.StyledButtonTopLeft size="small" category="primary">
      {' '}
      Button Top Left{' '}
    </B.StyledButtonTopLeft>
    <hr />
    <StyledHeading2> Rounded Button </StyledHeading2>
    <B.RoundedButton size="large" category="primary">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <B.RoundedButton size="large" category="primary">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <B.RoundedButton size="large" category="secondary">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <B.RoundedButton size="large" category="grey">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <B.RoundedButton size="large" category="orange">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <StyledHeading6> Medium Size Buttons </StyledHeading6>

    <B.RoundedButton size="medium" category="primary">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <B.RoundedButton size="medium" category="primary">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <B.RoundedButton size="medium" category="secondary">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <B.RoundedButton size="medium" category="grey">
      {' '}
      Rounded Button{' '}
    </B.RoundedButton>

    <B.RoundedButton size="medium" category="orange">
      {' '}
      Rounded Button{' '}
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
