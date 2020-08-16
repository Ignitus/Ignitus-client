import React, { useState } from 'react';
import { MessageSettings, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const InterfaceMessageSettings: React.FC = () => {
  const [anyone, setAnyone] = useState(false);
  const [connections, setConnections] = useState(false);
  const [directConnections, setDirectConnections] = useState(false);

  return (
    <Interface>
      <Heading2>Message Settings</Heading2>
      <hr />
      <MessageSettings
        anyone={anyone}
        connections={connections}
        directConnections={directConnections}
        setAnyone={setAnyone}
        setConnections={setConnections}
        setDirectConnections={setDirectConnections}
      />
    </Interface>
  );
};
