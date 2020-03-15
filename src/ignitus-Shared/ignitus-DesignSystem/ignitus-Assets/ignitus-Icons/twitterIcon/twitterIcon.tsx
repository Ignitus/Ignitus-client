import React, { Fragment } from 'react';
import { HTMLAttributes } from 'react';
import { TwitterIconColor } from '../../../ignitus-Atoms/colors';

type Props = HTMLAttributes<SVGElement>;

const TwitterIcon = ({title = 'Twitter Icon', ...rest }: Props) => {
  return (
    <svg
      aria-label={title}
      role="img"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill={TwitterIconColor}
      {...rest }
    >
      <title>{title}</title>
      <path d="M69.89 39.8v1.33c0 13.56-10.32 29.19-29.19 29.19a29 29 0 0 1-15.7-4.6 21.42 21.42 0 0 0 2.45.14 20.57 20.57 0 0 0 12.74-4.39 10.28 10.28 0 0 1-9.59-7.13 10.36 10.36 0 0 0 4.64-.17A10.28 10.28 0 0 1 27 44.1a.85.85 0 0 1 0-.1 10.21 10.21 0 0 0 4.64 1.28 10.27 10.27 0 0 1-3.18-13.7 29.12 29.12 0 0 0 21.16 10.7 10.49 10.49 0 0 1-.27-2.34 10.26 10.26 0 0 1 17.75-7 20.44 20.44 0 0 0 6.52-2.49 10.31 10.31 0 0 1-4.52 5.68 20.57 20.57 0 0 0 5.9-1.64 20.73 20.73 0 0 1-5.11 5.31z" />
    </svg>
  );
};

export default TwitterIcon;

/* SVG Credits goes to font-awesome : https://fontawesome.com/license */