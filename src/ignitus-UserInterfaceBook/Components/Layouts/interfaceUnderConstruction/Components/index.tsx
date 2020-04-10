import React from 'react';
import {Heading3} from '../../../../styles';
import {UnderConstructionContainer, Container} from '../style';
import {WebsiteUnderConstruction} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-UnderContruction/Components/index';

export const interfaceUnderConstruction: React.FC = () => (
  <Container>
    <Heading3>UnderConstruction ★</Heading3>
    <hr />
    <UnderConstructionContainer>
      <WebsiteUnderConstruction />
    </UnderConstructionContainer>
  </Container>
);
