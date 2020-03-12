/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {withErrorBoundary} from '../errorBoundary';
// import loader from '../../ignitus-Assets/Images/loader2.gif';
// import * as S from './Styles';
import './Styles/index.scss'
import DropDownButton from './DropDownButton'

export const ProfileCard = () => (
	// <S.ListElement>
	// 	<S.ProfileDetails>
	// 		<S.ProfileAvatar src=""></S.ProfileAvatar>
	// 		<S.ProfileDescription>

	// 		</S.ProfileDescription>
	// 	</S.ProfileDetails>
	// </S.ListElement>
	<ul style={{margin:"150px 60px"}}>
	<li className="list-item">
		<div className="profile-details">
			<div className="avatar-div">
			<img className="profile-avatar" src={require("./dummy_image.png")} alt="image"/>
			</div>
			<div className="description">
			<h2 className = "profile-details-heading">Sophia Carter</h2>
			<p>Literature Student</p>
			<p className="text-icon"><span><i className="fa fa-map-marker"></i></span> Canada</p>
			<DropDownButton></DropDownButton>
			</div>

		</div>
		<div className="profile-contact">
		<div className="card-links">
		<i className="fa fa-linkedin-square" />
                <i className="fa fa-facebook-f" />
                <i className="fa fa-github" />
								<i className="fa fa-google-plus" />

			</div>
			<p className = "text-icon contact-modes"><span><i style={{color:"#000066"}} className="fa fa-comments-alt"></i></span> Send them a message</p>
			<p className = "text-icon contact-modes"><span></span>Resume</p>
		</div>
		<div className="track-person">
			<p>Track Sophis progress</p>
			<i className="fa fa-bookmark"></i>
		</div>
	</li>
	</ul>
)

export default withErrorBoundary(ProfileCard);
