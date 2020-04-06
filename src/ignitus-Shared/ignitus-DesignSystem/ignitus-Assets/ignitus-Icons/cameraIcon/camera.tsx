import React from 'react';
import {HTMLAttributes} from 'react';

type Props = HTMLAttributes<SVGElement>;

const CameraIcon = ({title = 'Camera Icon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      viewBox="0 0 24 24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2ZM9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" />
    </svg>
  );
};

export default CameraIcon;
