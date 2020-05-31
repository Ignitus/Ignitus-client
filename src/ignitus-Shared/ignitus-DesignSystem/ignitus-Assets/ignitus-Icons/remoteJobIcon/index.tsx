import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const RemoteJobIcon = ({
  title = 'Remote Job Icon',
  ...rest
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
    {...rest}
  >
    <title>{title}</title>
    <path
      fill="#006"
      d="M6 10.5a2 2 0 100-4 2 2 0 000 4zM6 5.035c.975 0 1.86.395 2.5 1.035l2.5-2.5A7.073 7.073 0 006 1.5c-1.95 0-3.72.795-5 2.075l2.5 2.5A3.53 3.53 0 016 5.035z"
    />
  </svg>
);

// export default LinkedInIcon;

/* SVG Credits goes to font-awesome : https://fontawesome.com/license */
