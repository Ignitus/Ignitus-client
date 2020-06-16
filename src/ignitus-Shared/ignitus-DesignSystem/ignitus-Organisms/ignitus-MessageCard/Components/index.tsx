import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const MessageCard = withErrorBoundary(
  ({ name, position, numberMessages, dateSent, avatar, online }) => (
    <S.MessageContainer>
      <S.ImageContainer>
        <img src={avatar} alt="avatar" />
        <svg height="100" width="100">
          <circle cx="70" cy="70" r="10" strokeWidth="3" />
          {!online && <circle cx="70" cy="70" r="5" fill="white" />}
        </svg>
      </S.ImageContainer>

      <S.MessageSubTitle>
        <S.Sender>{name}</S.Sender>
        <S.SenderPosition>{position}</S.SenderPosition>
      </S.MessageSubTitle>

      <S.MessageDateTitle>
        <S.Details>{numberMessages}</S.Details>
        <S.Details>{dateSent}</S.Details>
      </S.MessageDateTitle>
    </S.MessageContainer>
  ),
);
