/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {withErrorBoundary} from '../errorBoundary';
// import loader from '../../ignitus-Assets/Images/loader2.gif';
// import * as S from './Styles';
import './Styles/index.scss';
import DropDownButton from './DropDownButton';

export const SocialIcons = () => (
  <div className="card-links">
    <i className="fa fa-linkedin-square" />
    <i className="fa fa-facebook-f" />
    <i className="fa fa-github" />
    <i className="fa fa-google-plus" />
  </div>
);

export const ProfileCard = () => (
  <ul style={{margin: '150px 60px'}}>
    <li className="list-item">
      <div className="profile-details">
        <div className="avatar-div">
          <img
            className="profile-avatar"
            src={require('./dummy_image.png')}
            alt="image"
          />
        </div>
        <div className="description">
          <h2 className="profile-details-heading">Sophia Carter</h2>
          <p>Literature Student</p>
          <p className="text-icon">
            <span>
              <i className="fa fa-map-marker" />
            </span>
            Canada
          </p>
          <DropDownButton />
        </div>
      </div>
      <div className="profile-contact">
        <SocialIcons />
        <p className="text-icon contact-modes">
          <span /> Send them a message
        </p>
        <p className="text-icon contact-modes">
          <span />Resume
        </p>
      </div>
      <div className="track-person">
        <p>Track Sophi&apos;s progress</p>
        <i className="fa fa-bookmark" />
      </div>
    </li>
  </ul>
);

export default withErrorBoundary(ProfileCard);
