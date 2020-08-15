import React, { useState } from 'react';
import { MessageSettings } from '../../../../../ignitus-Shared';

export const InterfaceMessageSettings: React.FC = () => {
  const [anyone, setAnyone] = useState(false);
  const [connections, setConnections] = useState(false);
  const [directConnections, setDirectConnections] = useState(false);

  return (
    <MessageSettings
      anyone={anyone}
      connections={connections}
      directConnections={directConnections}
      setAnyone={setAnyone}
      setConnections={setConnections}
      setDirectConnections={setDirectConnections}
    />
  );
};
