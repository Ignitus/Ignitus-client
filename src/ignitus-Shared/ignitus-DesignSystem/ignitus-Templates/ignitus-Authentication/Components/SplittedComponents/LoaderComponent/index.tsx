import React, {FunctionComponent} from 'react';
import loader from '../../../../../ignitus-Assets/ignitus-Logos/ignitusLoader.gif';

export const Loader: FunctionComponent = () => (
  <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
    <div className="loader">
      <img alt="loader" className="lazyload" data-src={loader} />
    </div>
  </div>
);
