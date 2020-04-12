import React from 'react';
import styled from '@emotion/styled';
import {default as L} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Logos/ignitusLoader.gif';

const Container = styled.div`
  text-align: center;
`;
const Loader = styled.img``;

export const Loading = ({...rest}) => (
  <Container {...rest}>
    <Loader alt="loader" src={L} />
  </Container>
);

/**
 * Way to modify Loader components using css.
export const Loader = styled(Loading)`
  img {
    width: 10rem;
  }
`;
 */
