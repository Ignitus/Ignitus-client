/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
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

export default function ProfileCard() {
  return (
    <div className="cardOuter">
      <div className="cardMain">
        <div className="cardImage">
          <img src={require('./dummy_image.png')} alt="profile-avatar" />
        </div>
        <div className="cardInfo">
          <h2>Sophia Carter</h2>
          <p>Literature Student</p>
          <p className="textIcon">
            <span>
              <i className="fa fa-map-marker" />
            </span>
            Canada
          </p>
          <DropDownButton />
        </div>
      </div>
      <div className="cardContact">
        <div className="cardLinks">
          <SocialIcons />
        </div>
        <div className="contactInfo">
          <p className="textIcon">
            <span>
              <i className="fa fa-plus" />
            </span>
            Send them a message
          </p>
          <p className="textIcon">
            <span>
              <i className="fa fa-plus" />
            </span>
            Resume
          </p>
        </div>
        <div className="trackPerson">
          <p>Track Sophi&apos;s progress</p>
          <i className="fa fa-bookmark" />
        </div>
      </div>
    </div>
  );
}
