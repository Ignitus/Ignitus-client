import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const PlusIcon = ({ title = 'Plus Icon', ...rest }: Props) => (
  <svg
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    {...rest}
  >
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
);

/* SVG credits goes to https://material.io/resources/icons/ */
