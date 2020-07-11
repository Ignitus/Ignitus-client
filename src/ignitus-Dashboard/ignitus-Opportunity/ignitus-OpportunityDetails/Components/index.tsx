import React from 'react';
import { Heading1, Paragraph } from '../../../../ignitus-Shared';
import * as S from '../styles';
import { InfoCard } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-OpportunitySideCard/Components';
import {
  ProjectDescription,
  Funding,
  DetailsRequired,
  InfoCardDetails,
  OpportunityCardDetails,
} from '../constants';
import { DashBoardOpportunity } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-DashBoardOpportunity/Components/DashBoardOpportunity';
import { Heading3 } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

export const OpportunityDetails = () => (
  <S.Container>
    <S.RowOne>
      {OpportunityCardDetails.map(({ title, description, subtitle, src }) => (
        <DashBoardOpportunity
          key={title}
          title={title}
          description={description}
          subtitle={subtitle}
          src={src}
        />
      ))}
      <S.BottomColumn>
        <Heading1>Project Description</Heading1>
        <S.Content>
          {ProjectDescription.map(content => (
            <S.Content key={content}>
              <Paragraph>{content}</Paragraph>
            </S.Content>
          ))}
          <Paragraph color="black">
            Candidates should apply for a PhD place in the normal way.
          </Paragraph>
          {DetailsRequired.map(content => (
            <Paragraph key={content}>
              {' '}
              <S.Dot>&#8226;</S.Dot> {content}
            </Paragraph>
          ))}
        </S.Content>
        <Heading3>Funding Notes</Heading3>
        {Funding.map(content => (
          <S.Content key={content}>
            <Paragraph>{content}</Paragraph>
          </S.Content>
        ))}
      </S.BottomColumn>
    </S.RowOne>
    <S.RowTwo>
      {InfoCardDetails.map(({ index, location, commitment, salary }) => (
        <InfoCard
          key={index}
          location={location}
          commitment={commitment}
          salary={salary}
        />
      ))}
    </S.RowTwo>
  </S.Container>
);
