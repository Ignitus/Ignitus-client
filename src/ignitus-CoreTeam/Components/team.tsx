/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import {Data} from '../constants';
import {withErrorBoundary} from '../../ignitus-Shared/Components/ErrorBoundary';
import * as S from '../Styles';
import * as T from '../../ignitus-Shared/Components/emotion-Styles/shared';
import {coreTeam, TeamItemProps} from '../types';

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
        <T.Paragraph>{description}</T.Paragraph>
        <S.LinkWrapper toggle={value}>
          <S.Link href={linkedin} color="black">
            <i className="fa fa-linkedin-square" />
          </S.Link>
          <S.Link href={angellist} color="black">
            <i className="fa fa-angellist" />
          </S.Link>
        </S.LinkWrapper>
      </S.TeamCard>
    </S.TeamCardContainer>
  );
};

const CoreTeam = () => {
  const team = Data.map((item: coreTeam) => {
    return <TeamItem key={item.title} item={item} />;
  });
  return <PureCoreTeam team={team} />;
};

export default withErrorBoundary(CoreTeam);
