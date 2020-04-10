import React from 'react';

import DashboardFooter from '../../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-DashboardFooter/Components';

import { Container } from '../style';
import { Heading3 } from '../../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceDashBoardFooter = () => (
  <Container>
    <Heading3>Footer</Heading3>
    <hr />
    <DashboardFooter />
  </Container>
);
