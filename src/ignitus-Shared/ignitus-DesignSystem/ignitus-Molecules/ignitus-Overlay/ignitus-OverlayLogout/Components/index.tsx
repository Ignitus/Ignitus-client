import React from 'react';
import * as O from '../styles';
import { OverlayProps } from '../types';
import { AppIcon } from '../../../../..';

export const OverlayLogout = ({ primaryText, secondaryText }: OverlayProps) => (
  <O.Overlay>
    <O.TopSection>
      <O.Logo name={AppIcon.IgnitusLogo} />
      <O.Paragraph>{primaryText}</O.Paragraph>
      <O.Paragraph secondary>{secondaryText}</O.Paragraph>
    </O.TopSection>
  </O.Overlay>
);
