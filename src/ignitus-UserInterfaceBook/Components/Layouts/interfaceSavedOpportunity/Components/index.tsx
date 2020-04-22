import React from 'react';

import { Grid } from '../style';
import { List } from '../constants';
import { Opportunity } from '../types';
import { DashBoardOpportunity, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';

export const interfaceSavedOpportunity: React.FC = () => (
  <Interface>
    <Heading2>Opportunities Saved Layout</Heading2>
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
  </Interface>
);
