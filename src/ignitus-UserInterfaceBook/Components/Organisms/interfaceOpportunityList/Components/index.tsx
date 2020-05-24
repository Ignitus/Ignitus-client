import React from 'react';
import styled from '@emotion/styled';
import { Opportunity, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { flexibleColDiv } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { OpportunityData } from '../constants';

export const OpportunityList = styled(flexibleColDiv)``;

export const interfaceOpportunityList: React.FC = () => (
  <Interface>
    <Heading2>Opportunity List</Heading2>
    <hr />
    <OpportunityList>
      {OpportunityData.map(({ title, ...rest }) => (
        <React.Fragment key={title}>
          <Opportunity title={title} {...rest} />
          <br />
        </React.Fragment>
      ))}
    </OpportunityList>
  </Interface>
);
