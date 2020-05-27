import React from 'react';
import * as S from '../styles';
import { withErrorBoundary } from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const Opportunity = withErrorBoundary(
  ({ title, description, picture, type, location, datePosted }) => (
    <S.OpportunityContainer>
      <S.ImageDescriptionContainer>
        <S.ImageContainer>
          <img src={picture} alt="universityLogo" height="150" />
        </S.ImageContainer>
        <S.DescriptionContainer>
          <S.OpportunityDateTitle>
            <S.OpportunityTitle>{title}</S.OpportunityTitle>
            <S.OpportunityData>{datePosted}</S.OpportunityData>
          </S.OpportunityDateTitle>

          <S.OpportunitySubTitle>
            {type} | {location}{' '}
            <span role="img" aria-label="flag">
              🇩🇪
            </span>
          </S.OpportunitySubTitle>
          <S.OpportunityDescriptionBtnContainer>
            <S.OpportunityDescription> {description}</S.OpportunityDescription>
            <BtnWithIcon />
          </S.OpportunityDescriptionBtnContainer>
        </S.DescriptionContainer>
      </S.ImageDescriptionContainer>
    </S.OpportunityContainer>
  ),
);

export const BtnWithIcon = () => (
  <S.BtnContainer>
    <S.BtnContainerIcon />
    <S.BtnContainerText>Apply</S.BtnContainerText>
  </S.BtnContainer>
);
