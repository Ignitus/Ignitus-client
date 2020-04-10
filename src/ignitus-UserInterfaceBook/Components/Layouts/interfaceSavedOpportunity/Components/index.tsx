import React from 'react';
import {Heading3} from '../../../../styles';
import {Container, Grid} from '../style';
import {List} from '../constants';
import {Opportunity} from '../types';
import DashBoardOpportunity from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Layout/ignitus-DashBoardOpportunity/Components/DashBoardOpportunity';

export const interfaceSavedOpportunity: React.FC = () => (
  <Container>
    <Heading3>Opportunities Saved Layout ★</Heading3>
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
