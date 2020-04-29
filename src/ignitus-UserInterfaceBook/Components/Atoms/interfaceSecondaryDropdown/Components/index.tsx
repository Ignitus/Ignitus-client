import React from 'react';
import { Interface } from '../../../../styles';
import { data } from '../constants';
import { Heading2, SecondaryDropDown } from '../../../../../ignitus-Shared';

export const interfaceSecondaryDropDown: React.FC = () => (
  <React.Fragment>
    <Interface>
      <Heading2>Secondary DropDown</Heading2>
      <hr />

      <SecondaryDropDown data={data} />
    </Interface>
  </React.Fragment>
);
