
import React from 'react';
import './Styles/style.scss';
import { Link } from 'react-router-dom';

export default const Notfound = props => (
  <div className="container-404">
    <div className="content">
      <p>404</p>
      <p>We could not find what you were looking for.</p>
      <p>
					Please check your URL or return&nbsp;
        <Link to="/">
          <span className="_link">home</span>
        </Link>
					.

      </p>
    </div>
  </div>
);
