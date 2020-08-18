import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const SendMessageIcon = ({
  title = 'SendMessage Icon',
  ...rest
}: Props) => (
  <svg
    aria-label={title}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    {...rest}
  >
    <title>{title}</title>
    <path
      d="M1.4 17.4L18.85 9.92002C19.66 9.57002 19.66 8.43002 18.85 8.08002L1.4 0.600017C0.74 0.310017 0.00999999 0.800017 0.00999999 1.51002L0 6.12002C0 6.62002 0.37 7.05002 0.87 7.11002L15 9.00002L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z"
      fill="white"
    />
  </svg>
);
