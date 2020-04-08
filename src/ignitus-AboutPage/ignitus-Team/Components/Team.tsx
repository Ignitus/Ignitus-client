/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useEffect} from 'react';
import {withErrorBoundary} from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import {TeamPropType, GitHubDataType} from '../types';
import * as S from '../Styles';
import loader from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/ignitusLoader.gif';

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
          View All <S.Right />
        </S.GithubContributorsLink>
      </S.GithubContributors>
    </S.GithubContributorsContainer>
  </S.Section>
);

const Team = ({
  getContributorsData,
  contributorsData: {presets, isFetching},
}: TeamPropType) => {
  useEffect(() => {
    getContributorsData();
  }, []);

  if (isFetching) {
    return (
      <S.Loader>
        <img alt="loader" src={loader} />
      </S.Loader>
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
};
export default withErrorBoundary(Team);
