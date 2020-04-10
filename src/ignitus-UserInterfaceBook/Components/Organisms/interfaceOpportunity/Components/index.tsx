import React from 'react';

import Opportunity from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OppurtunityList/Components/OppurtunityList';
import OpportunityFilters from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-filterComponents/OpportunityFilters/OpportunityFilters';

import { Container, Section } from '../style';
import { ProfileCard } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-ProfileCard/Components';
import { Heading3 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceOpportunity: React.FC = () => (
  <Container>
    <Heading3>Opportunity</Heading3>
    <hr />
    <Opportunity />

    <Section>
      <ProfileCard />
    </Section>

    <OpportunityFilters />
  </Container>
);
