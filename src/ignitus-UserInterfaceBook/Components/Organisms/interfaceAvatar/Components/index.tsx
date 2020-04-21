import React, {useState} from 'react';

import {Heading2} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {Interface} from '../../../../styles';
import {Avatar} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Avatar';
import {Button} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';

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
