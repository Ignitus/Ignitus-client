import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const HeartIcon = ({title = 'HeartIcon', ...rest}: Props) => {
  return (
    <svg
      aria-label={title}
      aria-hidden="true"
      data-icon="heart"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...rest}
    >
      <title>{title}</title>
      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8a31.35 31.35 0 0045.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
    </svg>
  );
};

export default HeartIcon;

/* SVG Credits goes to font-awesome : https://fontawesome.com/license */
