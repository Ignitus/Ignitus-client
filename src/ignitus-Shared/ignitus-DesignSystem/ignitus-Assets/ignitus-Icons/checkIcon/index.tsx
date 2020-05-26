import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const CheckIcon = ({ title = 'Check Icon', ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="17"
    fill="none"
    viewBox="0 0 23 17"
  >
    <path
      // fill="#fff"
      d="M7.291 13.499l-4.52-4.521a1.27 1.27 0 00-1.81 0 1.27 1.27 0 000 1.808l5.413 5.412a1.286 1.286 0 001.821 0L21.887 2.52a1.27 1.27 0 000-1.809 1.27 1.27 0 00-1.809 0L7.291 13.5z"
    />
  </svg>
);
