import React from 'react';
import * as O from '../styles';
import { Heading1 } from '../../../../..';
import { ModalProps } from '../types';

export const ModalHooray = ({
  title,
  primaryText,
  secondaryText,
  buttonText,
}: ModalProps) => (
  <O.Modal>
    <O.TopSection>
      <Heading1>{title}</Heading1>
      <O.Paragraph>{primaryText}</O.Paragraph>
      <O.Paragraph secondary>{secondaryText}</O.Paragraph>
    </O.TopSection>
    <O.BottomSection>
      <O.Button category="primary" size="medium">
        {' '}
        {buttonText}
      </O.Button>
    </O.BottomSection>
  </O.Modal>
);
