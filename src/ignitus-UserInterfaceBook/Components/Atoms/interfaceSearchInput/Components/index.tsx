import React from 'react';

import {DefaultSearchInput, Heading2} from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

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
