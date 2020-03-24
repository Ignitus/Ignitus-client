import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const HeartIcon = ({title = 'HeartIcon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      aria-hidden="true"
      data-icon="networkIcon"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M13.35 20.13a2 2 0 01-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29A5.8 5.8 0 0112 5.09a5.78 5.78 0 017.66-1.1A5.46 5.46 0 0122 8.28c.14 3.88-3.3 6.99-8.55 11.76l-.1.09z" />
    </svg>
  );
};

export default HeartIcon;

/* SVG Credits goes to font-awesome : https://fontawesome.com/license */
