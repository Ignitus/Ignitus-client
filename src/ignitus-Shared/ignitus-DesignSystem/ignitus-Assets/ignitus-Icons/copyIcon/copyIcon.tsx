import React from 'react';
import {HTMLAttributes} from 'react';

type Props = HTMLAttributes<SVGElement>;

const CopyIcon = ({title = 'Copy Icon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      viewBox="0 0 24 24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16.75 0.25H3C1.625 0.25 0.5 1.375 0.5 2.75V19C0.5 19.6875 1.0625 20.25 1.75 20.25C2.4375 20.25 3 19.6875 3 19V4C3 3.3125 3.5625 2.75 4.25 2.75H16.75C17.4375 2.75 18 2.1875 18 1.5C18 0.8125 17.4375 0.25 16.75 0.25ZM17.4875 5.9875L23.525 12.025C23.9875 12.4875 24.25 13.125 24.25 13.7875V25.25C24.25 26.625 23.125 27.75 21.75 27.75H7.9875C6.6125 27.75 5.5 26.625 5.5 25.25L5.5125 7.75C5.5125 6.375 6.625 5.25 8 5.25H15.7125C16.375 5.25 17.0125 5.5125 17.4875 5.9875ZM16.75 14H22.375L15.5 7.125V12.75C15.5 13.4375 16.0625 14 16.75 14Z" />
    </svg>
  );
};

export default CopyIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
