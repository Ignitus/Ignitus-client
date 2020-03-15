import React, {Fragment} from 'react';
import {HTMLAttributes} from 'react';
import {TwitterIconColor} from '../../../ignitus-Atoms/colors';

type Props = HTMLAttributes<SVGElement>;

const PlusIcon = ({title = 'Plus Icon', ...rest}: Props) => {
  return (
    <svg
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  );
};

export default PlusIcon;

/* SVG https://material.io/resources/icons/ */
