import React from 'react';
import {MultiMediaInputContainer} from '../styles';
import {DefaultMultiMediaInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/Components';
import {Heading3} from '../../../../styles';

export const interfaceMultiMediaInput = () => (
  <MultiMediaInputContainer>
    <Heading3>Multimedia Text Input </Heading3>
    <hr />

    <DefaultMultiMediaInput
      placeholder={
        'Share an article, poll, document, video, photo or an idea.\nUse @ to mention someone \n\n'
      }
      name={'name'}
    />
  </MultiMediaInputContainer>
);
