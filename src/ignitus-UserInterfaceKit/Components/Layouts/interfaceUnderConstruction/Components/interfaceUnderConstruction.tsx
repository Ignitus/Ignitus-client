import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {Notfound} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components/index';
import {UnderConstructionContainer, Container} from '../style';
import {WebsiteUnderConstruction} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-UnderContruction/Components/index';

const interfaceUnderConstruction = () => (
  <Container>
    <StyledHeading2>UnderConstruction ★</StyledHeading2>
    <hr />

    <UnderConstructionContainer>
      <WebsiteUnderConstruction />
    </UnderConstructionContainer>
  </Container>
);

export default interfaceUnderConstruction;
