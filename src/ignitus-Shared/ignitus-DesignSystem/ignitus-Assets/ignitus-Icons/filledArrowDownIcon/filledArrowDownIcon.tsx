import React from 'react';
import { HTMLAttributes } from 'react';
type Props = HTMLAttributes<SVGElement>;

const FilledArrowDownIcon = ({ title = 'FilledArrowDownIcon', ...rest }: Props) => {
  return (
    <svg
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      role="img"
      viewBox="0 0 24 15"
      width="24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0.296477 1.71L2.88648 4.3C3.27648 4.69 3.90648 4.69 4.29648 4.3L6.88648 1.71C7.51648 1.08 7.06648 0 6.17648 0H0.996477C0.106477 0 -0.333523 1.08 0.296477 1.71Z" />
    </svg>
  );
};

export default FilledArrowDownIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
