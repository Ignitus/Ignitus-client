import React from 'react';
import OpportunityDetailsCard from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ingitus-OpportunityDetailsCard/Components';
import UniversityOfMelbourne from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/UniversityOfMelbourne.png';
import { Container } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';

export const interfaceOpportunityDetailsCard = () => (
  <Container>
    <OpportunityDetailsCard
      title="PhD Project"
      subtitle="By The University of Melbourne"
      description="Church and civil courts in late medieval and early modern Scotland"
      fund=""
      src={UniversityOfMelbourne}
    />
  </Container>
);

// export default interfaceOpportunityDetailsCard;
