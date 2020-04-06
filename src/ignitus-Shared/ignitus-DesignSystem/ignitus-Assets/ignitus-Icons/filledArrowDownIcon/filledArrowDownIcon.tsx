import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const FilledArrowDownIcon = ({
  title = 'FilledArrowDownIcon',
  ...rest
}: Props) => {
  return (
    <svg
      aria-label={title}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z" />
    </svg>
  );
};

export default FilledArrowDownIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
