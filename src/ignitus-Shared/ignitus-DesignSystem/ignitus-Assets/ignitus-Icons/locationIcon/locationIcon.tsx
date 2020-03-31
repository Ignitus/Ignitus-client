import React from 'react';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

const LocationIcon = ({ title = 'Location Icon', ...rest }: Props) => {
  return (
    <svg
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="16"
      height="16"
      viewBox="0 0 11 15"
      {...rest}
    >
      <title>{title}</title>
      <path d="M5.49935 0.592773C2.7581 0.592773 0.541016 2.80986 0.541016 5.55111C0.541016 8.50486 3.67185 12.5778 4.96102 14.129C5.24435 14.469 5.76143 14.469 6.04477 14.129C7.32685 12.5778 10.4577 8.50486 10.4577 5.55111C10.4577 2.80986 8.2406 0.592773 5.49935 0.592773ZM5.49935 7.32194C4.52185 7.32194 3.72852 6.52861 3.72852 5.55111C3.72852 4.57361 4.52185 3.78027 5.49935 3.78027C6.47685 3.78027 7.27018 4.57361 7.27018 5.55111C7.27018 6.52861 6.47685 7.32194 5.49935 7.32194Z"/>
    </svg>
  );
};

export default LocationIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
