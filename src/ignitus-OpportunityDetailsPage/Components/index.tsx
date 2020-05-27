import React from 'react';
import { Heading1, Paragraph } from '../../ignitus-Shared';
import * as S from '../styles';
import { InfoCard } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OpportunitySideCard/Components';
import {
  ProjectDescription,
  Funding,
  DetailsRequired,
  InfoCardDetails,
  OpportunityCardDetails,
} from '../constants';
import { DashBoardOpportunity } from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-DashBoardOpportunity/Components/DashBoardOpportunity';

export const OpportunityDetailsPage = () => (
  <S.ParentContainer>
    <S.Column>
      {OpportunityCardDetails.map(({ title, description, subtitle, src }) => (
        <DashBoardOpportunity
          key={title}
          title={title}
          description={description}
          subtitle={subtitle}
          src={src}
        />
      ))}
      <S.Container>
        <Heading1>Project Description</Heading1>
        <S.Content>
          {ProjectDescription.map(content => (
            <S.Content key={content}>
              <Paragraph>{content}</Paragraph>
            </S.Content>
          ))}
          <Paragraph>
            Candidates should apply for a PhD place in the normal way, stating:
          </Paragraph>
          {DetailsRequired.map(content => (
            <Paragraph key={content}>&#9675;{content}</Paragraph>
          ))}
        </S.Content>
        <Heading1>Funding Notes</Heading1>
        {Funding.map(content => (
          <S.Content key={content}>
            <Paragraph>{content}</Paragraph>
          </S.Content>
        ))}
      </S.Container>
    </S.Column>
    {InfoCardDetails.map(({ index, location, commitment, salary }) => (
      <InfoCard
        key={index}
        location={location}
        commitment={commitment}
        salary={salary}
      />
    ))}
  </S.ParentContainer>
);
