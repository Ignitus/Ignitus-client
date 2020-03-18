import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const MentorsIcon = ({title = 'MentorsIcon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      aria-hidden="true"
      data-icon="mentorsIcon"
      viewBox="0 0 24 24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5a3 3 0 100 6zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5a3 3 0 100 6zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
};

export default MentorsIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
