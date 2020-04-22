/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useEffect} from 'react';
import {withErrorBoundary, AppIcon} from '../../../ignitus-Shared';
import {TeamPropType, GitHubDataType} from '../types';
import * as S from '../Styles';

const PureTeam = ({contributors}: any) => (
  <S.Section>
    <S.Container>
      <S.TitleWrapper>
        <S.Title>
          <S.Icon name={AppIcon.PlusIcon} />
          {contributors.length} Contributors
        </S.Title>
        <S.StyledParagraph>
          This project was made possible by these contributors. 🎉 🎨
        </S.StyledParagraph>
      </S.TitleWrapper>
      <S.ContributorsWrapper>
        <S.Contributors>{contributors}</S.Contributors>
        <S.Link href="https://github.com/Ignitus/Ignitus-client/graphs/contributors">
          View All <S.Icon name={AppIcon.KeyBoardArrowDown} />
        </S.Link>
      </S.ContributorsWrapper>
    </S.Container>
  </S.Section>
);

export const Team = withErrorBoundary(
  ({
    getContributorsData,
    contributorsData: {presets, isFetching},
  }: TeamPropType) => {
    useEffect(() => {
      getContributorsData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isFetching) {
      return <S.Loader />;
    }

    const contributors = presets.map((item: GitHubDataType) => (
      <S.AvatarLink
        key={item.id}
        target="_blank"
        rel="noopener noreferrer"
        href={item.html_url}
      >
        <S.Avatar
          src={item.avatar_url}
          width="100%"
          alt={`avatar ${item.login}`}
        />
      </S.AvatarLink>
    ));

    return <PureTeam contributors={contributors} />;
  },
);
