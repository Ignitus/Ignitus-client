import React from 'react';
import * as I from '../styles';
import {AppIcon} from '../../../../../ignitus-Shared/types/iconsTypes/iconEnums';
import {
  Heading4,
  Heading2,
} from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {
  SocialIcons,
  DashboardIcons,
  GeneralIcons,
  IgnitusLogos,
} from '../constants';
import {Interface} from '../../../../styles';
import { Black } from '../../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

export const interfaceIcons: React.FC = () => (
  <Interface>
    <Heading4 color={Black}>
      We are mainly using the Material Rounded Icon Library and some other icons
      from Flaticon and Fa-Fa icons.
    </Heading4>
    <br />
    <br />
    <Heading2>
      Social Icons{' '}
      <span role="img" aria-label="paint">
        🎨
      </span>
    </Heading2>
    <IconsMapper icons={SocialIcons} />
    <hr />
    <Heading2>Dashboard Icons</Heading2>
    <IconsMapper icons={DashboardIcons} />
    <hr />
    <Heading2>General Icons</Heading2>
    <IconsMapper icons={GeneralIcons} />

    <hr />
    <Heading2>Ignitus Logos</Heading2>
    <IconsMapper icons={IgnitusLogos} />
  </Interface>
);

const IconsMapper: Function = ({icons}: {icons: AppIcon[]}): JSX.Element[] =>
  icons.map((icon: AppIcon) => <I.StyledIcon name={icon} />);
