import React from 'react';
import {SearchInputContainer} from '../styles';
import {DefaultSearchInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultSearchInput/Components';
import { StyledHeading2 } from '../../../../styles';

const interfaceTypography: React.FC = () => (
  <SearchInputContainer>
    <StyledHeading2>Search Input </StyledHeading2>
    <hr />

    <DefaultSearchInput
      placeholder={'Search @user'}
      type={'text'}
      name={'name'}
    />
  </SearchInputContainer>
);

export default interfaceTypography;
