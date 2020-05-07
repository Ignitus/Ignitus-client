import React from 'react';
import { Heading2, AppIcon } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import {
  ToggleButton,
  ToggleIconButton,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-ToggleButtons/Components';

export const interfaceToggleButtons: React.FC = () => (
  <Interface>
    <Heading2>Toggle Buttons</Heading2>
    <hr />

    <ToggleButton
      leftLabel="Feed"
      rightLabel="Profile"
      handleClick={e => {
        alert(`${e} button clicked`);
      }}
    />
    <br />
    <br />
    <br />
    <br />
    <ToggleIconButton
      leftIcon={AppIcon.GridIcon}
      rightIcon={AppIcon.BarsIcon}
    />
  </Interface>
);
