import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const SaveIcon = ({title = 'SaveIcon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      aria-hidden="true"
      data-icon="saveIcon"
      viewBox="0 0 24 24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14a2 2 0 002-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default SaveIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
