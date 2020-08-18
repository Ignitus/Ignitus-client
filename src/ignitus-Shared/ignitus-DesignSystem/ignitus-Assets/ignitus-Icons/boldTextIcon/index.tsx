import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const BoldTextIcon = ({ title = 'BoldText Icon', ...rest }: Props) => (
  <svg
    aria-label={title}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="9" 
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    {...rest}
  >
    <title>{title}</title>
    <path d="M7.2 5.82C8.01209 5.24571 8.5814 4.30286 8.5814 3.42857C8.5814 1.49143 7.11628 0 5.23256 0H0V12H5.89395C7.64372 12 9 10.5429 9 8.75143C9 7.44857 8.28 6.33429 7.2 5.82ZM2.51163 2.14286H5.02326C5.71814 2.14286 6.27907 2.71714 6.27907 3.42857C6.27907 4.14 5.71814 4.71429 5.02326 4.71429H2.51163V2.14286ZM5.44186 9.85714H2.51163V7.28571H5.44186C6.13674 7.28571 6.69767 7.86 6.69767 8.57143C6.69767 9.28286 6.13674 9.85714 5.44186 9.85714Z" fill="white"/>  </svg>
);

