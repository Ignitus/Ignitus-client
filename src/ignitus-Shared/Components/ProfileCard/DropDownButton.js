import React from 'react';
import {withErrorBoundary} from '../errorBoundary';
// import loader from '../../ignitus-Assets/Images/loader2.gif';
// import * as S from './Styles';
import './Styles/index.scss'

export const DropDownButton = () => (
	<div className="btn-outer">
	<button className="custom-dropdown-btn"> More ..
	</button>
	<ul className ="custom-dropdown-menu">
		<li>Ask For Recommendation</li>
		<li>Share Profile</li>
		<li>Block</li>
	</ul>
	</div>
)
export default withErrorBoundary(DropDownButton);
