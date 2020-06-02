import React from 'react';
import { OverlayLogout, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceOverlay = () => (
  <Interface>
    <Heading2>Overlay</Heading2>
    <hr />
    <OverlayLogout
      primaryText="You are now logged out."
      secondaryText="See you soon!"
    />
  </Interface>
);
