import React from 'react';
import OpportunityDetailsCard from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ingitus-OpportunityDetailsCard/Components/index';
import UniversityOfMelbourne from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/UniversityOfMelbourne.png';
import { Heading1, Paragraph } from '../../ignitus-Shared';
import * as S from '../styles';
import { InfoCard } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OpportunitySideCard/Components';
import { ProjectDescription, Funding, DetailsRequired } from '../constants';
import { DashBoardOpportunity } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-DashBoardOpportunity/Components/DashBoardOpportunity';

export const OpportunityDetailsPage = () => (
  <S.ParentContainer>
    <S.Column>
      <DashBoardOpportunity
        title="PhD Project"
        description="Church and civil courts in late medieval and early modern Scotland."
        subtitle="By The University of Melbourne"
        src="https://storage.googleapis.com/ignitus_assets/ig-opportunities/universityOfMelbourne.png"
      />

      <S.Container>
        <Heading1>Project Description</Heading1>
        <S.Content>
          {ProjectDescription.map(content => (
            <S.Content>
              <Paragraph>{content}</Paragraph>
            </S.Content>
          ))}
          <Paragraph>
            Candidates should apply for a PhD place in the normal way, stating:
          </Paragraph>
          {DetailsRequired.map(content => (
            <Paragraph>&#9675;{content}</Paragraph>
          ))}
        </S.Content>
        <Heading1>Funding Notes</Heading1>
        {Funding.map(content => (
          <S.Content>
            <Paragraph>{content}</Paragraph>
          </S.Content>
        ))}
      </S.Container>
    </S.Column>
    <InfoCard location="Australia" commitment="Full-Time" salary="afvdg" />
  </S.ParentContainer>
);
