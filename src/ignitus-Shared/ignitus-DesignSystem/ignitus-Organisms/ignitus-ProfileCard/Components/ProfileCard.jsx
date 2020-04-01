/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import * as S from '../styles';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import {AppIcon} from '../../../../types/iconsTypes/enums';

const ProfileCard = () => (
  <S.ProfileDiv>
    <S.ProfileContainer>
      <S.ProfileTrack>
        <S.BookmarkIconDiv>
          <S.TextIconContent>Track Sophi&apos;s progress</S.TextIconContent>
          <S.ProfileBookmarkIcon name={AppIcon.BookmarkIcon} />
        </S.BookmarkIconDiv>
      </S.ProfileTrack>
      <S.ContentDiv>
        <S.ImageContainer>
          <img
            src="https://storage.googleapis.com/ignitus_assets/ig-avatars/Team_avatar-eugene.png"
            alt="ProfileLogo"
          />
        </S.ImageContainer>
        <S.DetailsContainer>
          <S.ProfileHeading>Sophia Carter</S.ProfileHeading>
          <S.ProfileSubHeading>Literature Student</S.ProfileSubHeading>
          <S.TextIconContainer>
            <S.LocationIcon name={AppIcon.MapMarkerIcon} />
            <S.TextIconContent>Location</S.TextIconContent>
          </S.TextIconContainer>
          <DropDownButton />
        </S.DetailsContainer>
      </S.ContentDiv>
      <S.SocialDiv>
        <S.SocialIcons>
          <S.SocialLinks href={''}>
            <S.SocialLinkIcons name={AppIcon.LinkedInIcon} />
          </S.SocialLinks>
          <S.SocialLinks href={''}>
            <S.SocialLinkIcons name={AppIcon.FacebookIcon} />
          </S.SocialLinks>
          <S.SocialLinks href={''}>
            <S.SocialLinkIcons name={AppIcon.GithubIcon} />
          </S.SocialLinks>
          <S.SocialLinks href={''}>
            <S.SocialLinkIcons name={AppIcon.GooglePlusIcon} />
          </S.SocialLinks>
        </S.SocialIcons>
        <S.SocialContact>
          <S.TextIconContainer>
            <S.SocialContactIcons name={AppIcon.ChatMessageIcon} />
            <S.TextIconContent>Send them a message</S.TextIconContent>
          </S.TextIconContainer>
          <S.TextIconContainer>
            <S.SocialContactIcons name={AppIcon.FileIcon} />
            <S.TextIconContent>Resume</S.TextIconContent>
          </S.TextIconContainer>
        </S.SocialContact>
      </S.SocialDiv>
    </S.ProfileContainer>
  </S.ProfileDiv>
);

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

export default withErrorBoundary(ProfileCard);
