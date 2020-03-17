import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const SaveIcon = ({title = 'SaveIcon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      aria-hidden="true"
      data-icon="heart"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4a2 2 0 00-1.99 2L2 18c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
    </svg>
  );
};

export default SaveIcon;

/* SVG Credits goes to font-awesome : https://fontawesome.com/license */
