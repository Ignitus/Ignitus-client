/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../ignitus-ErrorHandlingComponents/errorBoundary';

const Opportunity = () => (
  <S.OpportunityContainer>
    <S.ImageDescriptionContainer>
      <S.ImageContainer>
        <img
          src="https://storage.googleapis.com/ignitus_assets/ig-avatars/Team_avatar-eugene.png"
          alt="universityLogo"
          height="150"
        />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <S.OpportunityDateTitle>
          <S.OpportunityTitle>PHD Project</S.OpportunityTitle>
          <S.OpportunityData>Posted 1 Month ago.</S.OpportunityData>
        </S.OpportunityDateTitle>

        <S.OpportunitySubTitle>
          Full Time | Munich, Germany 🇩🇪
        </S.OpportunitySubTitle>
        <S.OpportunityDescriptionBtnContainer>
          <S.OpportunityDescription>
            {' '}
            We are looking for a Python engineer to join our SEO team in Munich
            and drive organic user acquisition of Ignitus.
          </S.OpportunityDescription>
          <S.BtnContainer>
            <S.BtnContainerIcon />
            <S.BtnContainerText>Apply</S.BtnContainerText>
          </S.BtnContainer>
        </S.OpportunityDescriptionBtnContainer>
      </S.DescriptionContainer>
    </S.ImageDescriptionContainer>
  </S.OpportunityContainer>
);

const OpportunityList = () => (
  <S.OpportunityList>
    <Opportunity />
    <Opportunity />
    <Opportunity />
  </S.OpportunityList>
);


export default withErrorBoundary(OpportunityList);
