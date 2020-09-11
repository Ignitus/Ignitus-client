import React from 'react';
import { MessageSettings, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const InterfaceMessageSettings: React.FC = () => {
  return (
    <Interface>
      <Heading2>Message Settings</Heading2>
      <hr />
      <MessageSettings />
    </Interface>
  );
};
