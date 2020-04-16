import React, {FunctionComponent} from 'react';
import * as A from '../../../styles';

export const Wrapper: FunctionComponent<{
  children: React.ReactNode;
}> = props => (
  <A.Container>
    <A.AuthenticationWrapper>
      <A.Row>{props.children}</A.Row>
    </A.AuthenticationWrapper>
  </A.Container>
);
