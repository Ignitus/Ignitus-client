import React from 'react';
import * as B from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';

import {
  AppIcon,
  DefaultButtonWithIcon,
  Heading2,
  Heading6,
} from '../../../../../ignitus-Shared';
import {Interface} from '../../../../styles';

export const interfaceButttons: React.FC = () => (
  <Interface>
    <Heading2> Buttons </Heading2>
    <br />
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

    <DefaultButtonWithIcon
      size="large"
      category="primary"
      name={AppIcon.LocationIcon}
      content={'Message'}
    />

    <hr />
    <br />
    <Heading6> Medium Size Buttons </Heading6>
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

    <DefaultButtonWithIcon
      size="medium"
      category="primary"
      name={AppIcon.LocationIcon}
      content={'Message'}
    />

    <hr />
    <br />
    <Heading6> Small Size Buttons </Heading6>
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

    <DefaultButtonWithIcon
      size="small"
      category="primary"
      name={AppIcon.LocationIcon}
      content={'Message'}
    />

    <hr />
    <br />
    <Heading6> Text Button </Heading6>
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
    <br />
    <Heading2> Styled Buttons </Heading2>

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
    <hr />
    <br />
    <Heading6> Medium Size Buttons </Heading6>

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
    <hr />
    <br />
    <Heading6> Small Size Buttons </Heading6>

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
    <Heading2> Rounded Button </Heading2>
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
    <hr />
    <br />
    <Heading6> Medium Size Buttons </Heading6>

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
    <br />
    <Heading6> Social Buttons </Heading6>
    <Heading6> Button with Icons </Heading6>
    <Heading6> Floating Action Button </Heading6>
    <Heading6> Icon with text link</Heading6>
    <Heading6> Icon Button</Heading6>
  </Interface>
);
