import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { InputTypes } from '../types';
import { BoldTextIcon } from '../../../ignitus-Assets/ignitus-Icons/boldTextIcon';
import { ItalicTextIcon } from '../../../ignitus-Assets/ignitus-Icons/italicTextIcon';
import { UnderlineTextIcon } from '../../../ignitus-Assets/ignitus-Icons/underlineTextIcon';
import { CapitalizeTextIcon } from '../../../ignitus-Assets/ignitus-Icons/capitalizeTextIcon';
import { QuotesIcon } from '../../../ignitus-Assets/ignitus-Icons/quotesIcon';
import { LinkIcon } from '../../../ignitus-Assets/ignitus-Icons/linkIcon';
import { ListBulletIcon } from '../../../ignitus-Assets/ignitus-Icons/listBulletIcon';
import { ListNumberIcon } from '../../../ignitus-Assets/ignitus-Icons/listNumberIcon';
import { AttachFileIcon } from '../../../ignitus-Assets/ignitus-Icons/attachFileIcon';
import { DiscardIcon } from '../../../ignitus-Assets/ignitus-Icons/discardIcon';
import { SendMessageIcon } from '../../../ignitus-Assets/ignitus-Icons/sendMessageIcon';




export const NewMessage = withErrorBoundary(
  ({
    textColor,
    titleColor,
    bgColor,
    ...rest
  }: InputTypes) => (
    <S.Container color={textColor} bgColor={bgColor} {...rest}>
      <S.MessageHeader>
  <S.HeaderLeft>TO</S.HeaderLeft>
      <S.Input placeholder="Type the name, username or email of your recepient"></S.Input>
      </S.MessageHeader>
        <S.BodyOptions color={textColor} bgColor={bgColor}>
          <S.BodyTab1>
            <S.IconContainer>
            <BoldTextIcon />
            </S.IconContainer>
            <S.IconContainer>
            <ItalicTextIcon />
            </S.IconContainer>
            <S.IconContainer>
            <UnderlineTextIcon />
            </S.IconContainer>
          </S.BodyTab1>
          <S.BodyTab2>
            <S.IconContainer>
              <CapitalizeTextIcon />
            </S.IconContainer>
            <S.IconContainer>
              <QuotesIcon />
            </S.IconContainer>
            <S.IconContainer>
              <LinkIcon />
            </S.IconContainer>
          </S.BodyTab2>
          <S.BodyTab3>
            <S.IconContainer>
              <ListBulletIcon />
            </S.IconContainer>
            <S.IconContainer>
              <ListNumberIcon />
            </S.IconContainer>
            <S.BtnContainer>
              <S.BtnIconContainer>
                <AttachFileIcon />
              </S.BtnIconContainer>
              <S.ButtonText>Upload a file</S.ButtonText>
            </S.BtnContainer>
          </S.BodyTab3>
        </S.BodyOptions>
        <S.MessageBody>
          <S.MessageInput placeholder="Type a new message..."></S.MessageInput>
        </S.MessageBody>
        <S.ActionButtons>
        <S.ActionBtnContainer>
            <S.BtnIconContainer>
              <DiscardIcon />
            </S.BtnIconContainer>
            <S.ButtonText1>Discard</S.ButtonText1>
        </S.ActionBtnContainer>  
        <S.ActionBtnContainer2>   
            <S.BtnIconContainer>
              <SendMessageIcon />
            </S.BtnIconContainer>
            <S.ButtonText2>Send</S.ButtonText2>
        </S.ActionBtnContainer2>    
        </S.ActionButtons>
    </S.Container>
  ),
);



