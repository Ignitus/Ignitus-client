import React from 'react';
import styled from '@emotion/styled';
import { Opportunity, Heading2 } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { flexibleColDiv } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { OpportunityData } from '../constants';
import { OpportunityDataType } from '../types';

export const OpportunityList = styled(flexibleColDiv)``;

export const interfaceOpportunityList: React.FC = () => (
  <Interface>
    <Heading2>Opportunity List</Heading2>
    <hr />
    <OpportunityList>
      {OpportunityData.map(({ ...rest }, index) => (
        <React.Fragment key={index}>
          <Opportunity {...rest} />
          <br />
        </React.Fragment>
      ))}
    </OpportunityList>
  </Interface>
);
