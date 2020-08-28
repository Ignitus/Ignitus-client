import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { InputTypes } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';

export const NewMessage = withErrorBoundary(
  ({ textColor, titleColor, bgColor, ...rest }: InputTypes) => (
    <S.Container color={textColor} bgColor={bgColor} {...rest}>
      <S.MessageHeader>
        <S.HeaderLeft>TO</S.HeaderLeft>
        <S.Input
          placeholder="Type the name, username or email of your recepient"
          type="text"
          name="name"
          height="4.5rem"
          width="47rem"
        />
      </S.MessageHeader>
      <S.BodyOptions color={textColor} bgColor={bgColor}>
        <S.BodyTab1>
          <S.IconContainer>
            <S.Icon name={AppIcon.BoldTextIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon name={AppIcon.ItalicTextIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon name={AppIcon.UnderlineTextIcon} />
          </S.IconContainer>
        </S.BodyTab1>
        <S.BodyTab2>
          <S.IconContainer>
            <S.Icon name={AppIcon.CapitalizeTextIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon name={AppIcon.QuotesIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon name={AppIcon.LinkIcon} />
          </S.IconContainer>
        </S.BodyTab2>
        <S.BodyTab3>
          <S.IconContainer>
            <S.Icon name={AppIcon.ListBulletIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <S.Icon name={AppIcon.ListNumberIcon} />
          </S.IconContainer>
        </S.BodyTab3>
        <S.Button size="small" category="white">
          <S.Icon name={AppIcon.AttachFileIcon} />
          Upload a file
        </S.Button>
      </S.BodyOptions>
      <S.MessageInput placeholder="Type a new message..." />
      <S.ButtonContainer>
        <S.Button size="large" category="white">
          <S.Icon name={AppIcon.DiscardIcon} />
          Discard
        </S.Button>
        <S.Button size="large" category="primary">
          <S.Icon name={AppIcon.SendMessageIcon} />
          Send
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  ),
);
