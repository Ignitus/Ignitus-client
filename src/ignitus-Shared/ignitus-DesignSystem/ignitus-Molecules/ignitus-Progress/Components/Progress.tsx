import React from 'react';

import {ProgressProps} from '../types';
import { Container, Circle, Line } from '../styles';

export const Progress: React.FC<ProgressProps> = ({
  steps = 4,
  current = 1,
  lineWidth = 6,
  lineHeight = 0.2,
  circle = 1,
  lineTransitionDuration = 0.5,
  circleTransitionDelayDuration = 0.2,
  ...rest
}) => {
  const circleProps = {
    size: circle,
    delay: circleTransitionDelayDuration,
  };

  const lineProps = {
    width: lineWidth,
    height: lineHeight,
    transition: lineTransitionDuration,
  };

  return (
    <Container {...rest}>
      {new Array(steps).fill(0).map((val, index) => (
        <React.Fragment key={val + index}>
          {index === current - 1
            ? <Circle current {...circleProps} />
            : (index < current ? <Circle fill {...circleProps} /> : <Circle {...circleProps} />)}
          {index !== steps - 1 && <Line fill={index < current - 1} {...lineProps} />}
        </React.Fragment>
      ))}
    </Container>
  );
}
