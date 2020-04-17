/**
 * Reference from eui/EuiLink
 */
import React from 'react';

const ignitusUrl = /(http|https):\/\/(.+\.)?ignitus\.org((\/|\?)[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?/g;

const isIgnitusUrl = (url: string = '') => {
  const matches = url.match(ignitusUrl);

  if (!matches) return false;

  // prevent match in internal url
  return matches[0].length === url.length;
};

const secureRel = ({ href, target, rel }) => {
  const isSecureUrl = !!href && isIgnitusUrl(href);
  const rel_ = !!rel ? rel.split(' ').filter(part => !!part.length && part !== 'noreferrer') : [];

  // if url is not part of 'ignitus.org' => add noreferrer rel
  if (!isSecureUrl) {
    rel_.push('noreferrer');
  }

  // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
  if (!!target && target.includes('_blank') && rel_.indexOf('noopener') === -1) {
    rel_.push('noopener');
  }

  return rel_.join(' ').trim();
};

interface Props {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  [rest: string]: any;
};

export const Link: React.FC<Props> = ({
  href = '#',
  target,
  rel,
  children,
  ...rest
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={secureRel({ href, target, rel })}
      {...rest}>
      {children}
    </a>
  );
};
