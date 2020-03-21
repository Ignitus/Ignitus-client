import React from 'react';
import * as I from '../styles';
import {StyledHeading2} from '../../../../styles';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/enums';
import {
  SocialIcons,
  DashboardIcons,
  GeneralIcons,
  IgnitusLogos,
} from '../constants';

const interfaceIcons = () => (
  <I.IconsContainer>
    <StyledHeading2>Social Icons 🎨</StyledHeading2>
    <IconsMapper icons={SocialIcons} />
    <hr />
    <StyledHeading2>Dashboard Icons</StyledHeading2>
    <IconsMapper icons={DashboardIcons} />
    <hr />
    <StyledHeading2>General Icons</StyledHeading2>
    <IconsMapper icons={GeneralIcons} />
    <hr />
    <StyledHeading2>Ignitus Logos</StyledHeading2>
    <IconsMapper icons={IgnitusLogos} />
  </I.IconsContainer>
);

const IconsMapper = ({icons}) => icons.map((icon: AppIcon) => <I.StyledIcon name={icon} />);

export default interfaceIcons;
