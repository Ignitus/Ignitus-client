import React from 'react';
import * as S from '../styles';
import * as C from '../../../ignitus-Atoms/colors';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { Heading2 } from '../../../..';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { DefaultInput } from '../../../ignitus-Atoms/ignitus-defaultInput/Components';

export const DeleteFinal = withErrorBoundary(() => (
  <S.DeleteContainer>
    <S.TopSection>
      <Heading2>Last step before you delete your account...</Heading2>
      <S.IconContainer color={C.White}>
        <S.StyledIcon name={AppIcon.CrossIcon} color={C.GreyOne} />
      </S.IconContainer>
    </S.TopSection>
    <S.MiddleSection>
      <S.StyledText>
        You&apos;ll lose your connections, your profile, and all your AngleList
        data.
      </S.StyledText>
      <S.StyledParagraph>
        For your security, enter your password to delete your account.
        <br /> This cannot be undone.
      </S.StyledParagraph>
      <DefaultInput
        name="password"
        type="password"
        placeholder="Enter your password"
        height="2rem"
        width="300px"
      />
    </S.MiddleSection>
    <S.BottomSection>
      <S.StyledRoundedButton size="medium" category="white">
        Cancel
      </S.StyledRoundedButton>
      <S.StyledRoundedButton size="medium" category="red">
        Delete Acount
      </S.StyledRoundedButton>
    </S.BottomSection>
  </S.DeleteContainer>
));
