import styled from '@emotion/styled';
import * as C from './colors';

export const Separator = styled.hr`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  color: ${C.GreyOne};
`;

export const Card = styled.div`
  display: block;
  height: auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  background-color: ${C.White};
`;

export const Wrapper = styled.div`
  margin: 1rem;
  margin-bottom: 2rem;
`;
