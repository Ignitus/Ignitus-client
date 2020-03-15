/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as S from './index';

const InternshipList = () => (
  <S.ContainerList>
    <S.InternshipContainer>
      <S.ImageDescriptionContainer>
        <S.ImageContainer>
          <img
            src="https://storage.googleapis.com/ignitus_assets/ig-avatars/Team_avatar-eugene.png"
            alt="universityLogo"
            height="150"
          />
        </S.ImageContainer>
        <S.DescriptionContainer>
          <S.OppurtunityTitle>PHD Project</S.OppurtunityTitle>
          <S.OppurtunitySubTitle>
            Full Time | Munich, Germany 🇩🇪
          </S.OppurtunitySubTitle>
          <S.OppurtunityDescription>
            We are looking for a Python engineer to join our SEO team in Munich
            and drive organic user acquisition of Ignitus.
          </S.OppurtunityDescription>
        </S.DescriptionContainer>
      </S.ImageDescriptionContainer>
      <S.DateBtnContainer>
         <S.DateContainer> Posted 1 Month ago.</S.DateContainer>
      </S.DateBtnContainer>
    </S.InternshipContainer>
  </S.ContainerList>
);

export default InternshipList;
