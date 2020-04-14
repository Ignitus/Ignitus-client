import React from 'react';
import Loadable from '../../../ignitus-Routes/ignitus-PublicRoutes/node_modules/react-loadable';
import loader from '../../ignitus-Assets/Images/loader.gif';

// [@INFO] Loading component can put in global UI component
const Loading = () =>
 <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
    <div className="loader">
      <img src={loader} className="lazyload" alt="Loading..." />
    </div>
  </div>;


export const Login = Loadable({
  loader: () => import('./login'),
  loading: Loading,
});
