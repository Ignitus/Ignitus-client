import React from 'react';

import { UnderConstructionContainer } from '../style';
import { WebsiteUnderConstruction, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceUnderConstruction: React.FC = () => (
  <Interface>
    <Heading2>UnderConstruction</Heading2>
    <hr />
    <UnderConstructionContainer>
      <WebsiteUnderConstruction />
    </UnderConstructionContainer>
  </Interface>
);
