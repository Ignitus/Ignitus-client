import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const FilledMessageIcon = ({
  title = 'Filled Message Icon',
  ...rest
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="22"
    fill="none"
    viewBox="0 0 28 22"
    {...rest}
  >
    <title> Filled Message Icon </title>
    <path
      fill="#006"
      fillRule="evenodd"
      d="M3.334.333h21.333c1.467 0 2.667 1.2 2.667 2.667v16c0 1.467-1.2 2.667-2.667 2.667H3.334A2.674 2.674 0 01.667 19V3c0-1.466 1.2-2.667 2.667-2.667zm12.08 11.12L24.134 6a1.14 1.14 0 00.533-.96c0-.893-.973-1.427-1.733-.96L14 9.667 5.067 4.08c-.76-.467-1.733.067-1.733.96 0 .387.2.747.533.96l8.72 5.454c.867.546 1.96.546 2.827 0z"
      clipRule="evenodd"
    />
  </svg>
);
