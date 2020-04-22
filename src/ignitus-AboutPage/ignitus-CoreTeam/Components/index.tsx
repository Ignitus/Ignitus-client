/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

import { Data } from '../constants';
import { withErrorBoundary, AppIcon, Paragraph } from '../../../ignitus-Shared';
import { Team, TeamItemProps } from '../types';

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
  const [value, setValue] = React.useState(false);
  return (
    <S.TeamCardContainer
      onMouseOver={() => setValue(true)}
      onMouseOut={() => setValue(false)}
    >
      <S.TeamCard>
        <S.TeamItemImg src={img} alt={`avatar ${title}`} />
        <S.TeamItemTitle>{title}</S.TeamItemTitle>
        <Paragraph>{description}</Paragraph>
        <S.LinkWrapper toggle={value}>
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

