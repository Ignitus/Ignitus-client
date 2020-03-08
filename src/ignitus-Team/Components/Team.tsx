/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useEffect} from 'react';
import {withErrorBoundary} from '../../ignitus-Internals';
import loader from '../../ignitus-Assets/Images/loader2.gif';
import {TeamPropType, GitHubDataType} from '../types';
import * as S from '../Styles';

const PureTeam = ({contributors}: any) => (
  <S.Section>
    <S.GithubContributorsContainer>
      <S.TitleWrapper>
        <S.GithubContributorsTitle>
          <i className="fa fa-plus" />
          14 Contributors
        </S.GithubContributorsTitle>
        <S.Paragraph>
          This project was made possible by these contributors. 🎉 🎨
        </S.Paragraph>
      </S.TitleWrapper>
      <S.GithubContributors>
        <S.Contributors>{contributors}</S.Contributors>
        <S.GithubContributorsLink href="https://github.com/Ignitus/Ignitus-client/graphs/contributors">
          View All on Github <i className="fa fa-chevron-right" />
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

  const contributors = presets.map((item: GitHubDataType, index: number) => (
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
