import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

const MessageIcon = ({ title = 'MessageIcon', ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label={title}
    aria-hidden="true"
    data-icon="messageIcon"
    viewBox="0 0 24 24"
    {...rest}
  >
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 4H4a2 2 0 00-1.99 2L2 18c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
  </svg>
);

export default MessageIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
