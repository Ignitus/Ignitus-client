import React from 'react';

import { DefaultMultiMediaInput } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/Components';
import { Interface } from '../../../../styles';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

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
