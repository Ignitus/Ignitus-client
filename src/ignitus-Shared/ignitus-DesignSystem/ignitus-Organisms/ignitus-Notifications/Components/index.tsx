/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import * as C from '../../../ignitus-Atoms/colors';
import { InputTypes } from '../types';

export const Notifications = withErrorBoundary(
  ({
    textColor,
    titleColor,
    bgColor,
    picture,
    title,
    textLeft,
    textRight,
    ...rest
  }: InputTypes) => (
    <S.Container color={textColor} bgColor={bgColor} {...rest}>
      <S.LeftContainer>
        {picture && <S.Image src={picture} />}
        {textLeft}
        <S.Text color={titleColor}>
          {'\u00A0'} {title} {'\u00A0'}
        </S.Text>
        {textRight}
      </S.LeftContainer>
      <S.RightContainer>
        <S.IconContainer>
          <S.Icon color={C.GreyOne} name={AppIcon.CrossIcon} />
        </S.IconContainer>
      </S.RightContainer>
    </S.Container>
  ),
);
