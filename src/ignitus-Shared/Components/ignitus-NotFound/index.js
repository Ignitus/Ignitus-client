import React from 'react';
import './Styles/style.scss';
import { Link } from 'react-router-dom';
export const Notfound = () => (
  <>
    <div class="head">
      <div className="meta"></div>
      <div className="meta"></div>
    </div>
    <div class="ani-main"></div>
    <div class="ani-body" ></div>
    <body>
      <div className="container-404">
        <div className="content">
          <p>404</p>
          <p>Looks like you're lost.</p>
          <p>
          The page you are looking for is not avaible!       
          </p>
          <p><a href="/" class="link_404">Go to Home</a></p>
        </div>
      </div>
    </body>
  </>
);
