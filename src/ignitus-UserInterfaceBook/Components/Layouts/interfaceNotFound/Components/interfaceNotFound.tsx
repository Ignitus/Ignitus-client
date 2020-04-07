import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {Notfound} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components/index';
import {NotFoundContainer, Container} from '../style';

const interfaceNotFound: React.FC = () => (
  <Container>
    <StyledHeading2>Not Found</StyledHeading2>
    <hr />
    <NotFoundContainer>
      <Notfound />
    </NotFoundContainer>
  </Container>
);

export default interfaceNotFound;
