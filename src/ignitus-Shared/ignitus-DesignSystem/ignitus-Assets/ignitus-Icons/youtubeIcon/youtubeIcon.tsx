import React from 'react';
import {HTMLAttributes} from 'react';
import {YoutubeIconColor} from '../../../ignitus-Atoms/colors';

type Props = HTMLAttributes<SVGElement>;

const YoutubeIcon = ({title = 'Youtube Icon', ...rest}: Props) => {
  return (
    <svg
      aria-label={title}
      role="img"
      viewBox="0 0 176 124"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{title}</title>
      <path
        fill={YoutubeIconColor}
        transform="translate(-8 -34)"
        d="M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36Z"
      />
      <polygon points="70 88.17 116 62 70 35.83 70 88.17" fill="#fff" />
    </svg>
  );
};

export default YoutubeIcon;
