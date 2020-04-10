import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {UnderConstructionContainer, Container} from '../style';
import {WebsiteUnderConstruction} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-UnderContruction/Components/index';

export const interfaceUnderConstruction: React.FC = () => (
  <Container>
    <StyledHeading2>UnderConstruction ★</StyledHeading2>
    <hr />
    <UnderConstructionContainer>
      <WebsiteUnderConstruction />
    </UnderConstructionContainer>
  </Container>
);
