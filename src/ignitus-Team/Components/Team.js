import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Styles/style.scss';

import { withErrorBoundary } from '../../ignitus-Internals';
import loader from '../../ignitus-Assets/Images/loader2.gif';

// eslint-disable-next-line react/prop-types
const PureTeam = ({ contributors }) => (
  <div>
    <div className="team-wrapper container my-5 py-5">
      <div className="row">
        <div className="col">
          <div className="title text-center mb-3">Our Contributors</div>
          <div className="studentsResearchers">
            This project was made possible by these contributors.
          </div>
          <div className="box-model">
            <div className="Contributors m-top">{contributors}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Team = ({ getContributorsData, contributorsData }) => {
  useEffect(() => {
    getContributorsData();
  }, []);

  const { presets, isFetching } = contributorsData;

  if (isFetching) {
    return (
      <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
        <div className="loader">
          <img alt="loader" src={loader} />
        </div>
      </div>
    );
  }

  const contributors = presets.map(item => (
    <a
      key={item.id}
      target="_blank"
      rel="noopener noreferrer"
      href={item.html_url}
      className="Contributor"
    >
      <img src={item.avatar_url} width="100%" alt={`avatar ${item.login}`} />
    </a>
  ));

  return <PureTeam contributors={contributors} />;
};

Team.propTypes = {
  getContributorsData: PropTypes.func.isRequired,
  contributorsData: PropTypes.shape({
    presets: PropTypes.arrayOf(
      PropTypes.shape({
        html_url: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }),
    ).isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};


export default withErrorBoundary(Team);
