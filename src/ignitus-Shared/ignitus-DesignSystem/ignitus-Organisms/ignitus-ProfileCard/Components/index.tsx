/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { Props } from '../types';

export const ProfileCard = withErrorBoundary(() => (
  <S.Container>
    <S.TopSection>
      <S.Paragraph margin="0 0.5rem 0 0">Track Sophi progress</S.Paragraph>
      <S.Icon name={AppIcon.BookmarkIcon} />
    </S.TopSection>

    <S.BottomSection>
      <S.LeftRow>
        <div>
          <S.Avatar src="https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png" alt="ProfileLogo" />
        </div>
        <S.ProfileInformationContainer>
          <S.Name>Sophia Carter</S.Name>
          <S.Designation>Literature Student</S.Designation>
          <IconContent content="Canada" name={AppIcon.LocationIcon} />
          <DropDownButton />
        </S.ProfileInformationContainer>
      </S.LeftRow>

      <S.RightRow>
        <S.Icons>
          <S.Link href="">
            <S.Icon name={AppIcon.FacebookIcon} />
          </S.Link>
          <S.Link href="">
            <S.Icon name={AppIcon.LinkedInIcon} />
          </S.Link>
          <S.Link href="">
            <S.Icon name={AppIcon.GithubIcon} />
          </S.Link>
          <S.Link href="">
            <S.Icon name={AppIcon.GooglePlusIcon} />
          </S.Link>
        </S.Icons>
        <S.Contact>
          <IconContent content="Send Message" name={AppIcon.QuestionAnswerIcon} />
          <IconContent content="Resume" name={AppIcon.FileIcon} />
        </S.Contact>
      </S.RightRow>
    </S.BottomSection>
  </S.Container>
));

const DropDownButton = () => (
  <S.DropDownBtnContainer>
    <S.DropDownBtn>
      More ...
      <S.DropDownMenu>
        <S.DropDownMenuListItem>Ask For Recommendation</S.DropDownMenuListItem>
        <S.DropDownMenuListItem>Share Profile</S.DropDownMenuListItem>
        <S.DropDownMenuListItem>Block</S.DropDownMenuListItem>
      </S.DropDownMenu>
    </S.DropDownBtn>
  </S.DropDownBtnContainer>
);

const IconContent = ({ content, name }: Props) => (
  <S.Wrapper>
    <S.Icon name={name} />
    <S.Paragraph margin="0 0 0 0.5rem" primary>{content}</S.Paragraph>
  </S.Wrapper>
);
