/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { Grey1 } from '../../../ignitus-Atoms/colors';

const ProfileCard = () => (
  <S.ProfileDiv>
    <S.ProfileContainer>
      <S.ProfileTrack>
        <TextIconContainer
          content="Track Sophi's progress"
          icon={AppIcon.BookmarkIcon}
          iconSize="2.5"
          direction="reverse"
          contentColor={Grey1}
        />
      </S.ProfileTrack>
      <S.ContentDiv>
        <S.ImageContainer>
          <img src="https://storage.googleapis.com/ignitus_assets/ig-avatars/Team_avatar-eugene.png" alt="ProfileLogo" />
        </S.ImageContainer>
        <S.DetailsContainer>
          <S.ProfileHeading>Sophia Carter</S.ProfileHeading>
          <S.ProfileSubHeading>Literature Student</S.ProfileSubHeading>
          <TextIconContainer
            content="Location"
            icon={AppIcon.MapMarkerIcon}
            iconSize="1.2"
            iconDistance={10}
          />
          <DropDownButton />
        </S.DetailsContainer>
      </S.ContentDiv>
      <S.SocialDiv>
        <S.SocialIcons>
          <S.SocialLinks href="">
            <S.SocialLinkIcons name={AppIcon.FacebookIcon} />
          </S.SocialLinks>
          <S.SocialLinks href="">
            <S.SocialLinkIcons name={AppIcon.LinkedInIcon} />
          </S.SocialLinks>
          <S.SocialLinks href="">
            <S.SocialLinkIcons name={AppIcon.GithubIcon} />
          </S.SocialLinks>
          <S.SocialLinks href="">
            <S.SocialLinkIcons name={AppIcon.GooglePlusIcon} />
          </S.SocialLinks>
        </S.SocialIcons>
        <S.SocialContact>
          <TextIconContainer
            content="Send them a message"
            icon={AppIcon.ChatMessageIcon}
            contentDistance="1.5"
          />
          <TextIconContainer
            content="Resume"
            icon={AppIcon.FileIcon}
            contentDistance="1.5"
          />
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

const TextIconContainer = ({
  icon,
  content,
  direction,
  iconSize,
  iconDistance,
  contentDistance,
  contentColor,
}) => (
  <S.TextIconContainer direction={direction} contentDistance={contentDistance}>
    <S.TextIcon name={icon} size={iconSize} />
    <S.TextIconContent iconDistance={iconDistance} contentColor={contentColor}>
      {content}
    </S.TextIconContent>
  </S.TextIconContainer>
);

export default withErrorBoundary(ProfileCard);
