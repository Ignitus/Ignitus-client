import React, { HTMLAttributes } from 'react';

import { White } from '../../../ignitus-Atoms/colors';

type Props = HTMLAttributes<SVGElement>;

export const UploadIcon = ({ title = 'Twitter Icon', ...rest }: Props) => (
  <svg
    aria-label={title}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    fill={White}
    {...rest}
    viewBox="0 0 12 14"
  >
    <title>{title}</title>
    <path d="M0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H10.8333C11.2917 1.66667 11.6667 1.29167 11.6667 0.833333C11.6667 0.375 11.2917 0 10.8333 0H0.833333C0.375 0 0 0.375 0 0.833333ZM2.00833 8.33333H3.33333V12.5C3.33333 12.9583 3.70833 13.3333 4.16667 13.3333H7.5C7.95833 13.3333 8.33333 12.9583 8.33333 12.5V8.33333H9.65833C10.4 8.33333 10.775 7.43333 10.25 6.90833L6.425 3.08333C6.1 2.75833 5.575 2.75833 5.25 3.08333L1.425 6.90833C0.9 7.43333 1.26667 8.33333 2.00833 8.33333Z" />
  </svg>
);
