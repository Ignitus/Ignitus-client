import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const KeyBoardArrowRight = ({title = 'KeyBoardArrowRight', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      aria-hidden="true"
      data-icon="KeyBoardArrowRight"
      viewBox="0 0 24 24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
    </svg>
  );
};

export default KeyBoardArrowRight;

/* SVG credits goes to https://material.io/resources/icons/ */
