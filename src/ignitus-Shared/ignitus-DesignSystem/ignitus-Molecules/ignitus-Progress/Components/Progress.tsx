import React from 'react';

import { Container, Circle, Line } from '../styles';

interface Props {
  steps?: number;
  current?: number;
};

export const Progress: React.FC<Props> = ({
  steps = 4,
  current = 1,
  ...rest
}) => (
    <Container {...rest}>
      {new Array(steps).fill(0).map((val, index) => (
        <React.Fragment key={val + index}>
          {index === current - 1
            ? <Circle current />
            : (index < current ? <Circle fill /> : <Circle />)}
          {index !== steps - 1 && <Line fill={ index < current - 1 } />}
        </React.Fragment>
      ))}
    </Container>
);

