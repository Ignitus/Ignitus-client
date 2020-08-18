import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const UnderlineTextIcon = ({ title = 'UnderlineText Icon', ...rest }: Props) => (
  <svg
    aria-label={title}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="12" 
    height="26"
    viewBox="0 0 12 10"
    fill="none"
    {...rest}
  >
    <title>{title}</title>
    <path d="M6.67714 12.4C9.27429 12.0533 11.1429 9.63556 11.1429 6.92444V1.11111C11.1429 0.497778 10.6629 0 10.0714 0C9.48 0 9 0.497778 9 1.11111V7.02222C9 8.50667 8.03143 9.85778 6.62571 10.1511C4.69714 10.5689 3 9.04 3 7.11111V1.11111C3 0.497778 2.52 0 1.92857 0C1.33714 0 0.857143 0.497778 0.857143 1.11111V7.11111C0.857143 10.2844 3.54 12.8178 6.67714 12.4ZM0 15.1111C0 15.6 0.385714 16 0.857143 16H11.1429C11.6143 16 12 15.6 12 15.1111C12 14.6222 11.6143 14.2222 11.1429 14.2222H0.857143C0.385714 14.2222 0 14.6222 0 15.1111Z" fill="white"/>
    </svg>
);





