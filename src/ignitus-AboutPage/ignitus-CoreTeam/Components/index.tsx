/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

import { Data } from '../constants';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { Team, TeamItemProps } from '../types';
import { AppIcon } from '../../../ignitus-Shared/types/iconsTypes/iconEnums';
import { Paragraph } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';

import * as S from '../styles';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';

const PureCoreTeam = ({team}: any) => (
  <S.PureCoreTeam>
    <T.Title> Our Team </T.Title>
    <S.TeamContainer>{team}</S.TeamContainer>
  </S.PureCoreTeam>
);

const TeamItem = ({
  item: {title, img, description, linkedin, angellist},
}: TeamItemProps) => {
  return (
    <S.TeamCardContainer>
      <S.TeamCard>
        <S.TeamItemImg src={img} alt={`avatar ${title}`} />
        <S.TeamItemTitle>{title}</S.TeamItemTitle>
        <Paragraph>{description}</Paragraph>
        <S.LinkWrapper>
          <S.Link href={linkedin} color="black">
            <S.LinkedIn name={AppIcon.LinkedInIcon} />
          </S.Link>
          <S.Link href={angellist} color="black">
            <S.AngelList name={AppIcon.AngelListIcon} />
          </S.Link>
        </S.LinkWrapper>
      </S.TeamCard>
    </S.TeamCardContainer>
  );
};

export const CoreTeam = withErrorBoundary(() => {
  const team = Data.map((item: Team) => {
    return <TeamItem key={item.title} item={item} />;
  });
  return <PureCoreTeam team={team} />;
});

