/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import * as S from '../styles';
import {TextIconContainer} from '../../../shared';

export default function ProfileCard() {
  return (
    <S.ProfileDiv>
      <S.ProfileContainer>
        <S.ProfileTrack>
          <S.BookmarkIconDiv>
            Track Sophi&apos;s progress
            <S.ProfileBookmarkIcon />
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
            <p>Literature Student</p>
            <TextIconContainer>
              <S.LocationIcon />
              Location
            </TextIconContainer>
            <DropDownButton />
          </S.DetailsContainer>
        </S.ContentDiv>
        <S.SocialDiv>
          <S.SocialIcons>
            <i className="fa fa-linkedin-square" />
            <i className="fa fa-facebook-f" />
            <i className="fa fa-github" />
            <i className="fa fa-google-plus" />
          </S.SocialIcons>
          <S.SocialContact>
            <TextIconContainer>
              <S.SendMessageIcon />
              <S.TextIconContent>Send them a message</S.TextIconContent>
            </TextIconContainer>
            <TextIconContainer>
              <S.ResumeIcon />
              <S.TextIconContent>Resume</S.TextIconContent>
            </TextIconContainer>
          </S.SocialContact>
        </S.SocialDiv>
      </S.ProfileContainer>
    </S.ProfileDiv>
  );
}

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
