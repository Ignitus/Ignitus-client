import React from 'react';
import { SearchInputContainer } from '../styles';
import { DefaultMulti } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/Components';
import { StyledHeading2 } from '../../../../styles';

const interfaceTypography = () => (
  <SearchInputContainer>
    <StyledHeading2>Multimedia Text Input </StyledHeading2>
    <hr />

    <DefaultMulti
      placeholder={'Share an article, poll, document, video, photo or an idea.\nUse @ to mention someone \n\n' }
      type={'text'}
      name={'name'}
    />
  </SearchInputContainer>
);

export default interfaceTypography;
