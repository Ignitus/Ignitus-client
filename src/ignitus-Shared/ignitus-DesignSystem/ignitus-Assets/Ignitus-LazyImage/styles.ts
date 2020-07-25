import styled from '@emotion/styled';
import { minimumWidthQuery } from '../../..';
import { LazyImageTypes } from './types';

export const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

export const Image = styled.img<LazyImageTypes>`
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};

  ${minimumWidthQuery[0]} {
    width: ${props => props.width0};
  }
  ${minimumWidthQuery[1]} {
    width: ${props => props.width1};
    height: ${props => props.height1};
  }
  ${minimumWidthQuery[2]} {
    width: ${props => props.width2};
    height: ${props => props.height2};
  }
  ${minimumWidthQuery[3]} {
    width: ${props => props.width3};
  }
  ${minimumWidthQuery[4]} {
    width: ${props => props.width4};
  }
  ${minimumWidthQuery[5]} {
    width: ${props => props.width5};
    height: ${props => props.height5};
  }
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    content: url(${placeHolder});
  }
`;
