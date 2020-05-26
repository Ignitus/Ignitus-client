import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const ShareIcon = ({ title = 'ShareIcon', ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="20"
    fill="none"
    viewBox="0 0 22 20"
  >
    <path
      fill="#006"
      d="M5.5 15C7.58 5.119 15.583 3.333 15.583 3.333V0L22 6.637l-6.417 6.696V10S9.928 9.829 5.5 15zm11 .145V18H1.833V6h6.048a16.033 16.033 0 012.145-2H0v16h18.333v-6.769L16.5 15.145z"
    />
  </svg>
);
