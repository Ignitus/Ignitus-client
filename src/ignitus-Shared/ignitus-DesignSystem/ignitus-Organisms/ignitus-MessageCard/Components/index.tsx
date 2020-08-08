import React from 'react';
import * as S from '../styles';
import * as C from '../../../ignitus-Atoms/colors';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { Props } from '../types';

export const MessageCard = withErrorBoundary(
  ({ name, position, numberMessages, dateSent, avatar, online }: Props) => (
    <S.MessageContainer>
      <S.ImageContainer>
        <svg>
          <circle cx="50%" cy="50%" r="30%" strokeWidth="10%" />
          {!online && <circle cx="50%" cy="50%" r="15%" fill={C.White} />}
        </svg>
        <img src={avatar} alt="avatar" />
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
