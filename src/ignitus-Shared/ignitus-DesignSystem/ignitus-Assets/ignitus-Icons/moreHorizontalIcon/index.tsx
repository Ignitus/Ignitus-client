import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;
// eslint-disable-next-line no-unused-vars
export const MoreHorizontalIcon = ({ ...rest }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="4"
      y="10"
      width="16"
      height="5"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10.4248C4.9 10.4248 4 11.2865 4 12.3397C4 13.3929 4.9 14.2546 6 14.2546C7.1 14.2546 8 13.3929 8 12.3397C8 11.2865 7.1 10.4248 6 10.4248ZM18 10.4248C16.9 10.4248 16 11.2865 16 12.3397C16 13.3929 16.9 14.2546 18 14.2546C19.1 14.2546 20 13.3929 20 12.3397C20 11.2865 19.1 10.4248 18 10.4248ZM12 10.4248C10.9 10.4248 10 11.2865 10 12.3397C10 13.3929 10.9 14.2546 12 14.2546C13.1 14.2546 14 13.3929 14 12.3397C14 11.2865 13.1 10.4248 12 10.4248Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect x="-13" y="-11.5957" width="50" height="47.8723" fill="#000066" />
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="-13"
        y="-12"
        width="50"
        height="49"
      >
        <rect x="-13" y="-11.5957" width="50" height="47.8723" fill="white" />
      </mask>
      <g mask="url(#mask1)" />
    </g>
  </svg>
);
