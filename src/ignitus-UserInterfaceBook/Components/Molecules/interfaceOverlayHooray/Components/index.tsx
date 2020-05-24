import React from 'react';
import { OverlayHooray, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceOverlayHooray = () => (
  <Interface>
    <Heading2>Overlay Hooray</Heading2>
    <hr />
    <OverlayHooray
      primaryText="Your application has been sent successfully!"
      secondaryText="Make sure to keep an eye on your email."
      buttonText="Go Back"
      title="Hooray!"
    />
  </Interface>
);
