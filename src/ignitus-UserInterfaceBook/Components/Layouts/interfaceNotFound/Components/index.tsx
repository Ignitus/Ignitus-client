import React from 'react';

import {Notfound, Heading2} from '../../../../../ignitus-Shared';
import {NotFoundContainer, Container} from '../style';

export const interfaceNotFound: React.FC = () => (
  <Container>
    <Heading2>Not Found</Heading2>
    <hr />
    <NotFoundContainer>
      <Notfound />
    </NotFoundContainer>
  </Container>
);
