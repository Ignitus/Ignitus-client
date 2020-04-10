import React from 'react';
import {Heading3} from '../../../../styles';
import {Notfound} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components/index';
import {NotFoundContainer, Container} from '../style';

export const interfaceNotFound: React.FC = () => (
  <Container>
    <Heading3>Not Found</Heading3>
    <hr />
    <NotFoundContainer>
      <Notfound />
    </NotFoundContainer>
  </Container>
);
