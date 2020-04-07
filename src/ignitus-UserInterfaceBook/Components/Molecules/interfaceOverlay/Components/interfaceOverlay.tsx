import React from 'react';
import Overlay from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Overlay/Components';
import {OverlayContainer} from '../styles';
import { StyledHeading2 } from '../../../../styles';

const interfaceOverlay = () => (
  <OverlayContainer>
    <StyledHeading2>Overlay</StyledHeading2>
    <hr />
    <Overlay />
  </OverlayContainer>
);

export default interfaceOverlay;
