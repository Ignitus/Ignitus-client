import React from 'react';

import {Notfound} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-NotFound/Components/index';
import {NotFoundContainer, Container} from '../style';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceNotFound: React.FC = () => (
  <Container>
    <Heading2>Not Found</Heading2>
    <hr />
    <NotFoundContainer>
      <Notfound />
    </NotFoundContainer>
  </Container>
);
