import React from 'react';
import * as S from '../styles';
import * as C from '../../../ignitus-Atoms/colors';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { Heading1 } from '../../../..';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { SM } from '../../../ignitus-Atoms/fonts';
import { PropTypes } from '../types';

export const DeleteAccount = withErrorBoundary(({ username }: PropTypes) => (
  <S.DeleteContainer>
    <S.TopSection>
      <Heading1>Delete Account</Heading1>
      <S.IconContainer color={C.White}>
        <S.StyledIcon name={AppIcon.CrossIcon} color={C.GreyOne} />
      </S.IconContainer>
    </S.TopSection>
    <S.MiddleSection>
      <S.StyledParagraph>
        We were hoping this day would never come, {username}. Before we proceed,
        we&apos;d like to understand why you&apos;re leaving.
      </S.StyledParagraph>
      <S.StyledCheckbox
        label="I have a privacy issue."
        value="first"
        size={SM}
      />
      <S.StyledCheckbox
        label="It was difficult to find a suitable mentor."
        value="second"
        size={SM}
      />
      <S.StyledCheckbox
        label="I'm receiving spam or other unwanted interaction."
        value="third"
        size={SM}
      />
      <S.StyledCheckbox
        label="No reason, I just want my account to be deleted."
        value="fourth"
        size={SM}
      />
      <S.StyledParagraph>
        Your feedback is important. Anything else you&apos;d like us to know?
      </S.StyledParagraph>
      <S.StyledTextArea
        rows={4}
        cols={100}
        placeholder="Help us improve! Share your feedback and suggestions."
      />
    </S.MiddleSection>
    <S.BottomSection>
      <S.StyledRoundedButton size="medium" category="white">
        Cancel
      </S.StyledRoundedButton>
      <S.StyledRoundedButton size="medium" category="primary">
        Continue
      </S.StyledRoundedButton>
    </S.BottomSection>
  </S.DeleteContainer>
));
