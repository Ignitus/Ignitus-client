import React from 'react';
import { Overlay, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceOverlay = () => (
  <Interface>
    <Heading2>Overlay</Heading2>
    <hr />
    <Overlay
      primaryText="Your application has been sent successfully!"
      secondaryText="Make sure to keep an eye on your email."
      buttonText="Go Back"
      title="Hooray!"
    />
  </Interface>
);
