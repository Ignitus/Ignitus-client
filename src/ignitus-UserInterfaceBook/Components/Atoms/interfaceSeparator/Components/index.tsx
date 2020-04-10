import React from 'react';
import {Heading3} from '../../../../styles';
import {SeparatorContainer, Separator} from '../styles';

export const interfaceSeparator: React.FC = () => (
  <SeparatorContainer>
    <Heading3>Separator</Heading3>
    <hr />
    <Separator data-content="OR" />
  </SeparatorContainer>
);
