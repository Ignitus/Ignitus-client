import React, { HTMLAttributes } from 'react';
import { IgnitusBlue } from '../../../ignitus-Atoms/colors';
type Props = HTMLAttributes<SVGElement>;

export const SavePlusIcon = ({ title = 'Save Plus Icon', ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="url(#pattern0)" d="M0 0H24V21.221H0z" />
    <defs>
      <pattern
        id="pattern0"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          transform="matrix(.04167 0 0 .04712 0 -.065)"
          xlinkHref="#image0"
        />
      </pattern>
      <image
        id="image0"
        width="24"
        height="24"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAWRJREFUSInVlbtKA0EUhr9ZJWIXrANaSFpR8wQRL4iFIFa2str4BLGw8A1sdCOCdRqr4KVMHdHWQhIM1naixhyLXXfHzWYyuSDkL+fMfP85Z4YzMOpS5vDBBHxuQmsd1BzILKgmSB14AKcMqSs4+ejDYG8NWqegps1JSB2cfTi7ToqOJR9yC8AFqLQZDv4e2YFcE6oVCwO3ABx3B/8xUUAeFttMYi3aXQZ1ExzoQyIgq3B+l2CwPQnpJ1CZzgAv2O+KwaQBb1kovQM4UWBqywy3lcr4LF+agWwMDm9n6QbzQzQIWePRYlJ7vA6XHV+P30nE0iqgZZ1gd4UsrQJ5BZU1Z2bzin5ZvvQKqj3laFbI0gyc8vD4EUszSJWAl8Hh0ghYwD+Mitiwu3+G3Bew1J+BOoTipb6SME2rFVj4BpW3B4sAR1Bsm8KGVrgrIJ7dh6Nc8G6Toj1+mcwEgRrIo82XOfr6Abj6YxY5FCKxAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

/* SVG credits goes to https://material.io/resources/icons/ */
