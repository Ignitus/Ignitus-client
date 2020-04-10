import React from 'react';
import Overlay from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Overlay/Components';
import {OverlayContainer} from '../styles';
import {Heading3} from '../../../../styles';

export const interfaceOverlay = () => (
  <OverlayContainer>
    <Heading3>Overlay</Heading3>
    <hr />
    <Overlay
      primaryText="Your application has been sent successfully!"
      secondaryText="Make sure to keep an eye on your email."
      buttonText="Go Back"
      title="Hooray!"
    />
  </OverlayContainer>
);
