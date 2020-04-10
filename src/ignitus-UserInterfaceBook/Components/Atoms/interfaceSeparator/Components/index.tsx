import React from 'react';
import {StyledHeading2} from '../../../../styles';
import {SeparatorContainer, Separator} from '../styles';

export const interfaceSeparator: React.FC = () => (
  <SeparatorContainer>
    <StyledHeading2>Separator</StyledHeading2>
    <hr />
    <Separator data-content="OR" />
  </SeparatorContainer>
);
