import React from 'react';
import {DashBoardFooterContainer} from '../style';
import {Heading3} from '../../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import DashboardFooter from '../../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-DashboardFooter/Components';

export const interfaceDashBoardFooter = () => (
  <DashBoardFooterContainer>
    <Heading3>Footer</Heading3>
    <hr />
    <hr />
    <DashboardFooter />
  </DashBoardFooterContainer>
);
