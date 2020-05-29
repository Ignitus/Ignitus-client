import React from 'react';
import { Modal, Heading2 } from '../../../../ignitus-Shared';
import { Interface } from '../../../styles';

export const interfaceModal = () => (
  <Interface>
    <Heading2>Modal</Heading2>
    <hr />
    <Modal
      primaryText="Your application has been sent successfully!"
      secondaryText="Make sure to keep an eye on your email."
      buttonText="Go Back"
      title="Hooray!"
    />
  </Interface>
);
