import React from 'react';
import * as O from '../styles';
import { OverlayProps } from '../types';
import { AppIcon, White, Paragraph } from '../../../..';

export const Overlay = ({ primaryText, secondaryText }: OverlayProps) => (
  <O.Overlay>
    <O.MessageSection>
      <O.Logo name={AppIcon.IgnitusLogo} />
      <O.Heading color={White}>{primaryText}</O.Heading>
      <Paragraph color={White}>{secondaryText}</Paragraph>
    </O.MessageSection>
  </O.Overlay>
);
