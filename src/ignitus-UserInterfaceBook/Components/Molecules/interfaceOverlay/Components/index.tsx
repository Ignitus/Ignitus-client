import React from 'react';
import { OverlayLogout, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceOverlay = () => (
  <Interface>
    <Heading2>Overlay</Heading2>
    <hr />
    <OverlayLogout
      primaryText="Your application has been sent successfully!"
      secondaryText="Make sure to keep an eye on your email."
      title="Hooray!"
    />
  </Interface>
);
