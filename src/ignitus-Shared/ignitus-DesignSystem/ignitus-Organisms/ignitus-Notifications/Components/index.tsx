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
    colorText,
    colorTitle,
    background,
    image,
    title,
    textLeft,
    textRight,
    ...rest
  }: InputTypes) => (
    <S.StyledTag color={colorText} background={background} {...rest}>
      <S.LeftContainer>
        {image && <S.Image src={image} alt="universityLogo" height="150" />}
        {textLeft}
        <S.Text color={colorTitle}>&nbsp; {title} &nbsp;</S.Text>
        {textRight}
      </S.LeftContainer>
      <S.RightContainer>
        <S.IconContainer>
          <S.StyledIcon color={C.GreyOne} name={AppIcon.CrossIcon} />
        </S.IconContainer>
      </S.RightContainer>
    </S.StyledTag>
  ),
);
