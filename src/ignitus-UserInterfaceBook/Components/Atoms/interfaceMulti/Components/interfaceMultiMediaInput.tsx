import React from 'react';
import {MultiMediaInputContainer} from '../styles';
import {DefaultMultiMediaInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/Components';
import {StyledHeading2} from '../../../../styles';

const interfaceMultiMediaInput = () => (
  <MultiMediaInputContainer>
    <StyledHeading2>Multimedia Text Input </StyledHeading2>
    <hr />

    <DefaultMultiMediaInput
      placeholder={
        'Share an article, poll, document, video, photo or an idea.\nUse @ to mention someone \n\n'
      }
      type={'text'}
      name={'name'}
    />
  </MultiMediaInputContainer>
);

export default interfaceMultiMediaInput;
