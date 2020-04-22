import React from 'react';

import { DefaultMultiMediaInput, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceMultiMediaInput = () => (
  <Interface>
    <Heading2>Multimedia Text Input </Heading2>
    <hr />

    <DefaultMultiMediaInput
      placeholder={
        'Share an article, poll, document, video, photo or an idea.\nUse @ to mention someone \n\n'
      }
      name={'name'}
    />
  </Interface>
);
