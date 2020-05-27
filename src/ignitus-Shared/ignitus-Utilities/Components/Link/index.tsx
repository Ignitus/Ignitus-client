import React from 'react';

import { secureRel } from './utils';

interface Props {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  [rest: string]: any;
}

export const Link: React.FC<Props> = ({
  href = '#',
  target,
  rel,
  children,
  ...rest
}) => (
  <a
    href={href}
    target={target}
    rel={secureRel({ href, target, rel })}
    {...rest}
  >
    {children}
  </a>
);
