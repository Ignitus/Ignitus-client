/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <div className="rectangle">
      <div className='top-row'>
        <div className='link' id='about'>
          <a href=''>
            About
          </a>
        </div>

        <div className='link' id='privacy'>
          <a href=''>
            Privacy
          </a>
        </div>

        <div className='link' id='careers'>
          <a href=''>
            Careers
          </a>
        </div>
      </div>

      <div className='bottom-row'>
        <div className='link' id='helpcenter'>
          <a href=''>
            Help Center
        </a>
        </div>

        <div className='link' id='terms'>
          <a href=''>
            Terms & Conditions
        </a>
        </div>
      </div>

      <div className='link' id='ignitus'>
        © Ignitus 2018
      </div>
    </div>
  )
}