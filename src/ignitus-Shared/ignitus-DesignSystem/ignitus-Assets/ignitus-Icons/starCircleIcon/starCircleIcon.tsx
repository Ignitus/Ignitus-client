import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const StarCircleIcon = ({title = 'StarCircleIcon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      viewBox="0 0 28 28"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M14.9875 2.5C8.0875 2.5 2.5 8.1 2.5 15C2.5 21.9 8.0875 27.5 14.9875 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 14.9875 2.5ZM20.2875 22.5L15 19.3125L9.71254 22.5L11.1125 16.4875L6.45004 12.45L12.6 11.925L15 6.25L17.4 11.9125L23.55 12.4375L18.8875 16.475L20.2875 22.5Z" />
    </svg>
  );
};

export default StarCircleIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
