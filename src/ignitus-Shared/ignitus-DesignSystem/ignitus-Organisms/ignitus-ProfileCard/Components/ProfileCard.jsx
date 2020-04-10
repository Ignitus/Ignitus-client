/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';
import { AppIcon } from '../../../../types/iconsTypes/iconEnums';
import { GreyOne } from '../../../ignitus-Atoms/colors';

const ProfileCard = () => (
  <S.Container>
    <S.TopSection>
      <TextIconContainer
        content="Track Sophi's progress"
        icon={AppIcon.BookmarkIcon}
        iconSize="2.5"
        direction="reverse"
        contentColor={GreyOne}
      />
    </S.TopSection>

    <S.BottomSection>
      <S.LeftRow>
        <div>
          <S.Avatar src="https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png" alt="ProfileLogo" />
        </div>
        <S.ProfileInformationContainer>
          <S.Name>Sophia Carter</S.Name>
          <S.Designation>Literature Student</S.Designation>
          <TextIconContainer
            content="Location"
            icon={AppIcon.MapMarkerIcon}
            iconSize="1.2"
            iconDistance={10}
          />
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
      </S.RightRow>
    </S.BottomSection>
  </S.Container>
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
