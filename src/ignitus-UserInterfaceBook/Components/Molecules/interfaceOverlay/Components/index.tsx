import React from 'react';
import Overlay from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Overlay/Components';
import {OverlayContainer} from '../styles';
import {StyledHeading2} from '../../../../styles';

export const interfaceOverlay = () => (
  <OverlayContainer>
    <StyledHeading2>Overlay</StyledHeading2>
    <hr />
    <Overlay
      primaryText="Your application has been sent successfully!"
      secondaryText="Make sure to keep an eye on your email."
      buttonText="Go Back"
      title="Hooray!"
    />
  </OverlayContainer>
);
