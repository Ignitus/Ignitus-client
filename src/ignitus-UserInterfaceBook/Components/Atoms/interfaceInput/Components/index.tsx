import React from 'react';

import { DefaultInput } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultInput/Components';

import {
  Heading2,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import { Interface } from '../../../../styles';

export const interfaceInput: React.FC = () => (
  <Interface>
    <Heading2>Input Fields</Heading2>
    <hr />
    <DefaultInput placeholder={'First Name'} type={'text'} name={'name'}/>
  </Interface>
);
