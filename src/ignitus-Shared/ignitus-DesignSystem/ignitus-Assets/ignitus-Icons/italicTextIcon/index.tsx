import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const ItalicTextIcon = ({ title = 'ItalicText Icon', ...rest }: Props) => (
  <svg
    aria-label={title}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="10" 
    height="12"
    viewBox="0 0 10 12"
    fill="none"
    {...rest}
  >
    <title>{title}</title>
    <path d="M3.33333 0V2.57143H5.175L2.325 9.42857H0V12H6.66667V9.42857H4.825L7.675 2.57143H10V0H3.33333Z" fill="white"/>
    </svg>
);








