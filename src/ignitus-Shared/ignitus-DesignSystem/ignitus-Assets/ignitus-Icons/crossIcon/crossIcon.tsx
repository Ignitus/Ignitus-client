import React from 'react';
import { HTMLAttributes } from 'react';
type Props = HTMLAttributes<SVGElement>;

const CrossIcon = ({ title = 'CrossIcon', ...rest }: Props) => {
  return (
    <svg
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      role="img"
      viewBox="0 0 18 18"
      width="20"
      {...rest}
    >
      <title>{title}</title>
      <path d="M8.43672 0.568945C8.19297 0.325195 7.79922 0.325195 7.55547 0.568945L4.49922 3.61895L1.44297 0.562695C1.19922 0.318945 0.805469 0.318945 0.561719 0.562695C0.317969 0.806445 0.317969 1.2002 0.561719 1.44395L3.61797 4.5002L0.561719 7.55645C0.317969 7.8002 0.317969 8.19395 0.561719 8.4377C0.805469 8.68145 1.19922 8.68145 1.44297 8.4377L4.49922 5.38145L7.55547 8.4377C7.79922 8.68145 8.19297 8.68145 8.43672 8.4377C8.68047 8.19395 8.68047 7.8002 8.43672 7.55645L5.38047 4.5002L8.43672 1.44395C8.67422 1.20645 8.67422 0.806445 8.43672 0.568945Z" />
    </svg>
  );
};

export default CrossIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
