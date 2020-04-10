import React from 'react';
import {SearchInputContainer} from '../styles';
import {DefaultSearchInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultSearchInput/Components';
import { Heading3 } from '../../../../styles';

export const interfaceSearchInput: React.FC = () => (
  <SearchInputContainer>
    <Heading3>Search Input </Heading3>
    <hr />

    <DefaultSearchInput
      placeholder={'Search @user'}
      type={'text'}
      name={'name'}
    />
  </SearchInputContainer>
);
