/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useEffect} from 'react';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {TeamPropType, GitHubDataType} from '../types';
import * as S from '../Styles';

const PureTeam = ({contributors}: any) => (
  <S.Section>
    <S.GithubContributorsContainer>
      <S.TitleWrapper>
        <S.GithubContributorsTitle>
          <S.Plus />
          {contributors.length} Contributors
        </S.GithubContributorsTitle>
        <S.StyledParagraph>
          This project was made possible by these contributors. 🎉 🎨
        </S.StyledParagraph>
      </S.TitleWrapper>
      <S.GithubContributors>
        <S.Contributors>{contributors}</S.Contributors>
        <S.GithubContributorsLink href="https://github.com/Ignitus/Ignitus-client/graphs/contributors">
          View All <S.Chevron />
        </S.GithubContributorsLink>
      </S.GithubContributors>
    </S.GithubContributorsContainer>
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

    if (true) {
      return (
        <S.Loader />
      );
    }

    const contributors = presets.map((item: GitHubDataType) => (
      <S.Link
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
      </S.Link>
    ));

    return <PureTeam contributors={contributors} />;
  },
);
