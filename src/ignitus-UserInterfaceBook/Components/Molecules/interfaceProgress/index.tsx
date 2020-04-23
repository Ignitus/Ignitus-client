import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Interface } from '../../../styles';
import { Heading2, Button } from '../../../../ignitus-Shared';
import { Progress } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Progress';
import { flexibleRowDiv } from '../../../../ignitus-Shared/ignitus-DesignSystem/shared';

const Middle = styled(flexibleRowDiv)``;

export const InterfaceProgress = () => {
  const [current, updateCurrent] = useState(1);
  const steps = 5;

  const next = () => (current === steps + 1 ? null : updateCurrent(current + 1));
  const previous = () => (current === 1 ? null : updateCurrent(current - 1));

  return (
    <Interface>
      <Heading2>
        Signup Progress
      </Heading2>
      <hr />
      <br />
      <Progress steps={steps} current={current} />
      <br />
      <Middle>
        <Button category="primary" onClick={previous}>
          Previous
        </Button>
        <Button category="primary" onClick={next}>
          Next
        </Button>
      </Middle>
    </Interface>
  );
};
