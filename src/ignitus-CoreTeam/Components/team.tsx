/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import {Data} from '../constants';
import {withErrorBoundary} from '../../ignitus-Internals';
import * as S from '../Styles';
import * as T from '../../ignitus-Helpers/emotion-Styles/shared';
import {coreTeam} from '../constants';

const PureCoreTeam = ({team}: any) => (
  <S.PureCoreTeam>
    <T.Title> Our Team </T.Title>
    <S.TeamContainer>{team}</S.TeamContainer>
  </S.PureCoreTeam>
);

const TeamItem = ({item}: any) => {
  const {title, img, description, linkedin, angellist}:coreTeam  = item;
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
          <T.Link href={linkedin} color="black">
            <i className="fa fa-linkedin-square" />
          </T.Link>
          <T.Link href={angellist} color="black">
            <i className="fa fa-angellist" />
          </T.Link>
        </S.LinkWrapper>
      </S.TeamCard>
    </S.TeamCardContainer>
  );
};

const CoreTeam = () => {
  const team = Data.map((item: coreTeam) => <TeamItem item={item} />);
  return <PureCoreTeam team={team} />;
};

export default withErrorBoundary(CoreTeam);
