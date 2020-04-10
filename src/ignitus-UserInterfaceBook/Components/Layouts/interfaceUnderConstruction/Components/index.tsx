import React from 'react';

import { UnderConstructionContainer } from '../style';
import { WebsiteUnderConstruction } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-UnderContruction/Components/index';
import { Interface } from '../../../../styles';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceUnderConstruction: React.FC = () => (
  <Interface>
    <Heading2>UnderConstruction</Heading2>
    <hr />
    <UnderConstructionContainer>
      <WebsiteUnderConstruction />
    </UnderConstructionContainer>
  </Interface>
);
