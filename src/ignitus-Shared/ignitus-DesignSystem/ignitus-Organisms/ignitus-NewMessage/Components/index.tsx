import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { InputTypes } from '../types';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { Icon } from '../../../../ignitus-Utilities/Components/icon';

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
            <Icon name={AppIcon.BoldTextIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <Icon name={AppIcon.ItalicTextIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <Icon name={AppIcon.UnderlineTextIcon} />
          </S.IconContainer>
        </S.BodyTab1>
        <S.BodyTab2>
          <S.IconContainer>
            <Icon name={AppIcon.CapitalizeTextIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <Icon name={AppIcon.QuotesIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <Icon name={AppIcon.LinkIcon} />
          </S.IconContainer>
        </S.BodyTab2>
        <S.BodyTab3>
          <S.IconContainer>
            <Icon name={AppIcon.ListBulletIcon} />
          </S.IconContainer>
          <S.IconContainer>
            <Icon name={AppIcon.ListNumberIcon} />
          </S.IconContainer>
          <S.BtnContainer>
            <S.BtnIconContainer>
              <Icon name={AppIcon.AttachFileIcon} />
            </S.BtnIconContainer>
            <S.ButtonText>Upload a file</S.ButtonText>
          </S.BtnContainer>
        </S.BodyTab3>
      </S.BodyOptions>
      <S.MessageBody>
        <S.MessageInput placeholder="Type a new message..." />
      </S.MessageBody>
      <S.ActionButtons>
        <S.ActionBtnContainer>
          <S.BtnIconContainer>
            <Icon name={AppIcon.DiscardIcon} />
          </S.BtnIconContainer>
          <S.ButtonText1>Discard</S.ButtonText1>
        </S.ActionBtnContainer>
        <S.ActionBtnContainer2>
          <S.BtnIconContainer>
            <Icon name={AppIcon.SendMessageIcon} />
          </S.BtnIconContainer>
          <S.ButtonText2>Send</S.ButtonText2>
        </S.ActionBtnContainer2>
      </S.ActionButtons>
    </S.Container>
  ),
);
