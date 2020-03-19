/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style.scss';

export default function dashboardFooter() {
  return (
    <div className="rectangle">
      <div className='column'>
        <div className='columnOne'>
          <a href=''> About </a>
          <a href=''> Privacy </a>
          <a href=''> Careers </a>
        </div>

        <div className='columnTwo'>
          <a href=''> Help Center </a>
          <a href=''> Terms & Conditions </a>
        </div>

        <div className='columnThree'>
          © Ignitus 2018
        </div>

      </div >
    </div >
  )
}