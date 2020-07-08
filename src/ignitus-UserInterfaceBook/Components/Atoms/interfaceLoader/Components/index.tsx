import React from 'react';
import { Interface } from '../../../../styles';
import { Heading2 } from '../../../../../ignitus-Shared';
import { Loader } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-Loader/Components';

export const interfaceLoader: React.FC = () => (
  <Interface>
    <Heading2>Loader</Heading2>
    <hr />
    <div style={{ width: '10rem' }}>
      <Loader />
    </div>
  </Interface>
);
