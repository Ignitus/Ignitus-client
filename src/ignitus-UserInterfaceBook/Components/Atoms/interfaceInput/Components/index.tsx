import React from 'react';

import {
  Heading2,
  DefaultInput
} from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceInput: React.FC = () => (
  <Interface>
    <Heading2>Input Fields</Heading2>
    <hr />
    <DefaultInput placeholder={'First Name'} type={'text'} name={'name'}/>
  </Interface>
);
