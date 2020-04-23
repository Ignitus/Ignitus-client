import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const ContributionIcon = ({title = 'ContributionIcon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      viewBox="0 0 24 24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M1.33333 13.3333H9.33333C10.0667 13.3333 10.6667 12.7333 10.6667 12V1.33333C10.6667 0.6 10.0667 0 9.33333 0H1.33333C0.6 0 0 0.6 0 1.33333V12C0 12.7333 0.6 13.3333 1.33333 13.3333ZM1.33333 24H9.33333C10.0667 24 10.6667 23.4 10.6667 22.6667V17.3333C10.6667 16.6 10.0667 16 9.33333 16H1.33333C0.6 16 0 16.6 0 17.3333V22.6667C0 23.4 0.6 24 1.33333 24ZM14.6667 24H22.6667C23.4 24 24 23.4 24 22.6667V12C24 11.2667 23.4 10.6667 22.6667 10.6667H14.6667C13.9333 10.6667 13.3333 11.2667 13.3333 12V22.6667C13.3333 23.4 13.9333 24 14.6667 24ZM13.3333 1.33333V6.66667C13.3333 7.4 13.9333 8 14.6667 8H22.6667C23.4 8 24 7.4 24 6.66667V1.33333C24 0.6 23.4 0 22.6667 0H14.6667C13.9333 0 13.3333 0.6 13.3333 1.33333Z" />
    </svg>
  );
};

export default ContributionIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
