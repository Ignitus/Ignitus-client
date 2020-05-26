import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const BarsIcon = ({ title = 'Bars Icon', ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label={title}
    viewBox="0 0 24 24"
    {...rest}
  >
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

/* SVG credits goes to https://material.io/resources/icons/ */
