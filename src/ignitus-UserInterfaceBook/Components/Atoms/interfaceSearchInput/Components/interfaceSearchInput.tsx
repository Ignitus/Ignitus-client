import React from 'react';
import {SearchInputContainer} from '../styles';
import {DefaultSearchInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultSearchInput/Components';
import { StyledHeading2 } from '../../../../styles';

const interfaceTypography = () => (
  <SearchInputContainer>
    <StyledHeading2>Search Input </StyledHeading2>
    <hr />

    <DefaultSearchInput
      placeholder={'Sea'}
      type={'text'}
      name={'name'}
    />
  </SearchInputContainer>
);

export default interfaceTypography;
