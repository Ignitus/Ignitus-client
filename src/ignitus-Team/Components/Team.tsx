/* eslint-disable jsx-a11y/accessible-emoji */
// import '../Styles/style.scss';
import React, {useEffect} from 'react';
import {withErrorBoundary} from '../../ignitus-Internals';
import loader from '../../ignitus-Assets/Images/loader2.gif';
import {TeamPropType, GitHubDataType} from '../types';
import * as S from '../Styles';
import * as T from '../../ignitus-Helpers/emotion-Styles/shared';

const PureTeam = ({contributors}: any) => (
  <S.Section>
    <S.GithubContributorsContainer>
      <S.TitleWrapper>
        <T.Title> Our Contributors </T.Title>
        <T.Paragraph>
          This project was made possible by these contributors. 🎉 🎨
        </T.Paragraph>
      </S.TitleWrapper>
      <S.GithubContributors>
        <div className="Contributors">{contributors}</div>
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
      <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
        <div className="loader">
          <img alt="loader" src={loader} />
        </div>
      </div>
    );
  }

  const contributors = presets.map((item: GitHubDataType) => (
    <T.Link
      key={item.id}
      target="_blank"
      rel="noopener noreferrer"
      href={item.html_url}
      className="Contributor"
    >
      <T.Avatar
        src={item.avatar_url}
        width="100%"
        alt={`avatar ${item.login}`}
      />
    </T.Link>
  ));

  return <PureTeam contributors={contributors} />;
};
export default withErrorBoundary(Team);
