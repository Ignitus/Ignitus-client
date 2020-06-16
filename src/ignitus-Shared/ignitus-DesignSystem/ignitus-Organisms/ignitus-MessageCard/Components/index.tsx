import React from 'react';
import * as S from '../styles';
import {
  Heading5,
  Heading6,
  Paragraph,
} from '../../../ignitus-Atoms/typography';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const MessageCard = withErrorBoundary(
  ({ name, position, numberMessages, dateSent, avatar }) => (
    <S.MessageContainer>
      <S.ImageContainer>
        <img src={avatar} alt="avatar" />
        <svg height="100" width="100">
          <circle cx="70" cy="70" r="10" strokeWidth="3" />
        </svg>
      </S.ImageContainer>

      <S.MessageSubTitle>
        <Heading5>{name}</Heading5>
        <Heading6>{position}</Heading6>
      </S.MessageSubTitle>

      <S.MessageDateTitle>
        <Paragraph>{numberMessages}</Paragraph>
        <Paragraph>{dateSent}</Paragraph>
      </S.MessageDateTitle>
    </S.MessageContainer>
  ),
);
