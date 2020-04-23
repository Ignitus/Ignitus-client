import React, { FunctionComponent } from 'react';
import * as A from '../../../styles';

export const Wrapper: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => (
  <A.Container>
    <A.AuthenticationWrapper>
      <A.Row>{children}</A.Row>
    </A.AuthenticationWrapper>
  </A.Container>
);
