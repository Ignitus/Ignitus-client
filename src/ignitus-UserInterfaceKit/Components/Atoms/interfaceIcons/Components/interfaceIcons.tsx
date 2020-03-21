import React from 'react';
import * as I from '../styles';
import {StyledHeading2} from '../../../../styles';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/enums';

const interfaceIcons = () => (
  <I.IconsContainer>
    <StyledHeading2>Social Icons 🎨</StyledHeading2>
    <I.StyledIcon name={AppIcon.LinkedInIcon} />
    <I.StyledIcon name={AppIcon.AngelListIcon} />
    <I.StyledIcon name={AppIcon.TwitterIcon} />
    <hr />
    <StyledHeading2>Dashboard Icons</StyledHeading2>
    <I.StyledIcon name={AppIcon.PlusIcon} />
    <I.StyledIcon name={AppIcon.ApplyIcon} />
    <I.StyledIcon name={AppIcon.HeartIcon} />
    <I.StyledIcon name={AppIcon.MessageIcon} />
    <I.StyledIcon name={AppIcon.SaveIcon} />
    <I.StyledIcon name={AppIcon.NetworkIcon} />
    <I.StyledIcon name={AppIcon.MentorsIcon} />
    <hr />
    <StyledHeading2>General Icons</StyledHeading2>
    <I.StyledIcon name={AppIcon.KeyBoardArrowDown} />
    <I.StyledIcon name={AppIcon.KeyBoardArrowRight} />
    <I.StyledIcon name={AppIcon.Chevron} />
  </I.IconsContainer>
);

export default interfaceIcons;
