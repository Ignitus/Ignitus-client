import React from 'react';
import { Heading2, AppIcon } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import {
  DefaultToggleButton1,
  DefaultToggleButton2,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-ToggleButtons/Components';

export const interfaceToggleButtons: React.FC = () => (
  <Interface>
    <Heading2>Toggle Buttons</Heading2>
    <hr />

    <DefaultToggleButton1
      leftLabel="Feed"
      rightLabel="Profile"
      categoryLeft="primary"
      categoryRight="grey"
    />
    <br />
    <br />
    <br />
    <br />
    <DefaultToggleButton2
      leftIcon={AppIcon.GridIcon}
      rightIcon={AppIcon.BarsIcon}
      categoryLeft="grey"
      categoryRight="white"
    />
  </Interface>
);
