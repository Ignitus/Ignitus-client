import React from 'react';
import * as S from '../styles';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

export const Opportunity: React.FunctionComponent = () => (
  <S.OpportunityContainer>
    <S.ImageDescriptionContainer>
      <S.ImageContainer>
        <img
          className="lazyload"
          data-src="https://storage.googleapis.com/ignitus_assets/ig-avatars/eugene.png"
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
          Full Time | Munich, Germany <span role="img" aria-label="flag">🇩🇪</span>
        </S.OpportunitySubTitle>
        <S.OpportunityDescriptionBtnContainer>
          <S.OpportunityDescription>
            {' '}
            We are looking for a Python engineer to join our SEO team in Munich
            and drive organic user acquisition of Ignitus.
          </S.OpportunityDescription>
          <BtnWithIcon />
        </S.OpportunityDescriptionBtnContainer>
      </S.DescriptionContainer>
    </S.ImageDescriptionContainer>
  </S.OpportunityContainer>
);

const BtnWithIcon = () => (
  <S.BtnContainer>
    <S.BtnContainerIcon />
    <S.BtnContainerText>Apply</S.BtnContainerText>
  </S.BtnContainer>
);

const OpportunityList = () => (
  <S.OpportunityList>
    <Opportunity />
  </S.OpportunityList>
);

export default withErrorBoundary(OpportunityList);
