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
