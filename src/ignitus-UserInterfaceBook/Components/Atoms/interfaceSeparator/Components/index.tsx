import React from 'react';
import {SeparatorContainer, Separator} from '../styles';
import { Heading2 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const interfaceSeparator: React.FC = () => (
  <SeparatorContainer>
    <Heading2>Separator</Heading2>
    <hr />
    <Separator data-content="OR" />
  </SeparatorContainer>
);
