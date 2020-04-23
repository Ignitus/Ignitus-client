import React, {useState} from 'react';

import {Heading2, Avatar, Button} from '../../../../../ignitus-Shared';
import {Interface} from '../../../../styles';

export const InterfaceAvatar: React.FC = () => {
  const [,update] = useState();
  const forceUpdate = () => update({});

  return (
    <Interface>
      <Heading2>
        Random Avatar
    </Heading2>
      <hr />
      <Avatar />
      <br />
      <Button category="primary" size="small" onClick={forceUpdate}>
        Generate Random
      </Button>
    </Interface>
  );
}
