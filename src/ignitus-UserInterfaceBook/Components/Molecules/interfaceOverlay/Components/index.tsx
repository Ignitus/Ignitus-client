import React from 'react';
import Overlay from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Overlay/Components';
import { Interface } from '../../../../styles';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

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
