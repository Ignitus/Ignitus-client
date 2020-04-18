import React from 'react';

import {DefaultSearchInput} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultSearchInput/Components';
import { Interface } from '../../../../styles';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceSearchInput: React.FC = () => (
  <Interface>
    <Heading2>Search Input </Heading2>
    <hr />

    <DefaultSearchInput
      placeholder={'Search @user'}
      type={'text'}
      name={'name'}
    />
  </Interface>
);
