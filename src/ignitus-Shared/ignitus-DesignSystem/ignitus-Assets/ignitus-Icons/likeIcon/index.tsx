import React, { HTMLAttributes } from 'react';
import { IgnitusBlue } from '../../../ignitus-Atoms/colors';

type Props = HTMLAttributes<SVGElement>;

export const LikeIcon = ({ title = 'Like Icon', ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 9 9"
    aria-label={title}
    {...rest}
  >
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.1875 1.125C5.535 1.125 4.90875 1.42875 4.5 1.90875C4.09125 1.42875 3.465 1.125 2.8125 1.125C1.6575 1.125 0.75 2.0325 0.75 3.1875C0.75 4.605 2.025 5.76 3.95625 7.515L4.5 8.00625L5.04375 7.51125C6.975 5.76 8.25 4.605 8.25 3.1875C8.25 2.0325 7.3425 1.125 6.1875 1.125ZM4.5375 6.95625L4.5 6.99375L4.4625 6.95625C2.6775 5.34 1.5 4.27125 1.5 3.1875C1.5 2.4375 2.0625 1.875 2.8125 1.875C3.39 1.875 3.9525 2.24625 4.15125 2.76H4.8525C5.0475 2.24625 5.61 1.875 6.1875 1.875C6.9375 1.875 7.5 2.4375 7.5 3.1875C7.5 4.27125 6.3225 5.34 4.5375 6.95625Z"
      fill={IgnitusBlue}
    />{' '}
  </svg>
);

/* SVG credits goes to https://material.io/resources/icons/ */
