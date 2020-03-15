/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <div>
    <div className="rectangle">
      <div className='link' id='about'>
        About
      </div>

      <div className='link' id='privacy'>
      Privacy
      </div>
      
      <div className='link' id='careers'>
        Careers
      </div>
      <div className='helpcenter'>
        <a href="#!">
      Help Center
      </a>
      </div>
      <div className='terms' href="#!">
        Terms & Conditions
      </div>
    </div>
    </div>
  )
}
