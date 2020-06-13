import React from 'react';
import { Overlay, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceOverlay = () => (
  <Interface>
    <Heading2>Overlay</Heading2>
    <hr />
    <div
      style={{
        width: '60vw',
        height: '70vh',
      }}
    >
      <Overlay
        primaryText="You are now logged out."
        secondaryText="See you soon!"
      />
    </div>
  </Interface>
);
