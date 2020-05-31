import React from 'react';
import { ModalHooray, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceModalHooray = () => (
  <Interface>
    <Heading2>Modal Hooray</Heading2>
    <hr />
    <ModalHooray
      primaryText="Your application has been sent successfully!"
      secondaryText="Make sure to keep an eye on your email."
      buttonText="Go Back"
      title="Hooray!"
    />
  </Interface>
);
