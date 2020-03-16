/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style.scss';

export default function SideNavigation() {
  return (
    <div>
      <div className="navigator">
        <div className="option general">
          General
        </div>
        <div className="option password">
          Password
        </div>
        <div className="option messaging">
          Messaging
        </div>
        <div className="option notification">
          Notification
        </div>
        <div className="option blockeduser">
          Blocked Users
        </div>
        <div className="option privacy">
          Privacy
        </div>  
      </div>
    </div>
  )
}