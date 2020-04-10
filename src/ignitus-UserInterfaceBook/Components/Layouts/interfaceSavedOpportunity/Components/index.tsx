import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {Container, Grid} from '../style';
import {List} from '../constants';
import {Opportunity} from '../types';
import DashBoardOpportunity from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-DashBoardOpportunity/Components/DashBoardOpportunity';

export const interfaceSavedOpportunity: React.FC = () => (
  <Container>
    <StyledHeading2>Opportunities Saved Layout ★</StyledHeading2>
    <hr />
    <Grid>
      {List.map(({title, description, subtitle, src}: Opportunity) => (
        <DashBoardOpportunity
          key={title}
          title={title}
          description={description}
          subtitle={subtitle}
          src={src}
        />
      ))}
    </Grid>
  </Container>
);
