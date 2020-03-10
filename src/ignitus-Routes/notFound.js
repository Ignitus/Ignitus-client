import React from 'react';
import './Styles/style.scss';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from "./Styles/404animation.json";
//path to animation  file
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
  preserveAspectRatio: 'xMidYMid slice'
  }
};
export const Notfound = () =>
  (
   <div>
       <div className="container-404">
        <div className="content">
         <p ><b>Oops!</b></p>
         <p>We can&apos;t seem to  find the page you were looking for&nbsp;</p>
         <p>
          Please check your URL or return&nbsp;
          <Link to="/">
          <span className="_link">home</span>
          </Link>
          .
        </p>
      </div>
        {/* Lottie Animation */}
        <div className="animation">
         <Lottie options={defaultOptions}
                height={400}
                width={500}/>
      </div>
      </div>
     </div>
  )
