import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const QuotesIcon = ({ title = 'Quotes Icon', ...rest }: Props) => (
  <svg
    aria-label={title}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="14" 
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    {...rest}
  >
    <title>{title}</title>
    <path d="M2.77375 9C3.22 9 3.63125 8.739 3.82375 8.334L5.06625 5.778C5.18875 5.526 5.25 5.256 5.25 4.977V0.9C5.25 0.405 4.85625 0 4.375 0H0.875C0.39375 0 0 0.405 0 0.9V4.5C0 4.995 0.39375 5.4 0.875 5.4H2.625L1.72375 7.254C1.33 8.055 1.89875 9 2.77375 9ZM11.5238 9C11.97 9 12.3812 8.739 12.5737 8.334L13.8163 5.778C13.9388 5.526 14 5.256 14 4.977V0.9C14 0.405 13.6062 0 13.125 0H9.625C9.14375 0 8.75 0.405 8.75 0.9V4.5C8.75 4.995 9.14375 5.4 9.625 5.4H11.375L10.4737 7.254C10.08 8.055 10.6488 9 11.5238 9Z" fill="white"/>
    </svg>
);


