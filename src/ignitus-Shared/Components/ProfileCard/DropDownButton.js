import React from 'react';
import {withErrorBoundary} from '../errorBoundary';
import './Styles/index.scss';

export const DropDownButton = () => (
  <div className="btn-outer">
    <div className="custom-dropdown-btn">
      More ..
      <ul className="custom-dropdown-menu">
        <li>Ask For Recommendation</li>
        <li>Share Profile</li>
        <li>Block</li>
      </ul>
    </div>
  </div>
);
export default withErrorBoundary(DropDownButton);
