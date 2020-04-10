import React from 'react';
import * as I from '../styles';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/iconEnums';
import { Heading4, Heading2, Heading3 } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {
  SocialIcons,
  DashboardIcons,
  GeneralIcons,
  IgnitusLogos,
} from '../constants';


export const interfaceIcons: React.FC = () => (
  <I.IconsContainer>
    <Heading4>We are mainly using the Material Rounded Icon Library and some other icons from Flaticon and Fa-Fa icons.</Heading4>
    <Heading3>Social Icons <span role="img" aria-label="paint">🎨</span></Heading3>
    <IconsMapper icons={SocialIcons} />
    <hr />
    <Heading3>Dashboard Icons</Heading3>
    <IconsMapper icons={DashboardIcons} />
    <hr />
    <Heading3>General Icons</Heading3>
    <IconsMapper icons={GeneralIcons} />

    <hr />
    <Heading3>Ignitus Logos</Heading3>
    <IconsMapper icons={IgnitusLogos} />
  </I.IconsContainer>
);

const IconsMapper: Function = ({icons}: {icons: AppIcon[]}): JSX.Element[] => icons.map((icon: AppIcon) => <I.StyledIcon name={icon} />);
