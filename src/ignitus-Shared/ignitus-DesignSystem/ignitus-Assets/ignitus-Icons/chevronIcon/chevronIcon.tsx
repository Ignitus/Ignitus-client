import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const ChevronIcon = ({title = 'ChevronIcon', ...rest}: Props) => {
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
      <path d="M9.29 6.71a1 1 0 000 1.41L13.17 12l-3.88 3.88a1 1 0 101.41 1.41l4.59-4.59a1 1 0 000-1.41L10.7 6.7a1 1 0 00-1.41.01z" />
    </svg>
  );
};

export default ChevronIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
