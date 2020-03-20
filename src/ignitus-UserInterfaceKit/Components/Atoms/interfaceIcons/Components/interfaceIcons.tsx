import React from 'react';
import * as I from '../styles';
import {Heading2} from '../../../userInterfaceKit/styles';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/enums';

const interfaceIcons = () => (
  <I.IconsContainer>
    <Heading2>Social Icons 🎨</Heading2>
    <I.StyledIcon name={AppIcon.LinkedInIcon} />
    <I.StyledIcon name={AppIcon.AngelListIcon} />
    <I.StyledIcon name={AppIcon.TwitterIcon} />
    <hr />
    <Heading2>Dashboard Icons</Heading2>
    <I.StyledIcon name={AppIcon.PlusIcon} />
    <I.StyledIcon name={AppIcon.ApplyIcon} />
    <I.StyledIcon name={AppIcon.HeartIcon} />
    <I.StyledIcon name={AppIcon.MessageIcon} />
    <I.StyledIcon name={AppIcon.SaveIcon} />
    <I.StyledIcon name={AppIcon.NetworkIcon} />
    <I.StyledIcon name={AppIcon.MentorsIcon} />
    <hr />
    <Heading2>General Icons</Heading2>
    <I.StyledIcon name={AppIcon.KeyBoardArrowDown} />
    <I.StyledIcon name={AppIcon.KeyBoardArrowRight} />
    <I.StyledIcon name={AppIcon.Chevron} />
  </I.IconsContainer>
);

export default interfaceIcons;
