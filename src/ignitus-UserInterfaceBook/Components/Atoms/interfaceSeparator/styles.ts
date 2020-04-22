import styled from '@emotion/styled';
import * as C from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import { Medium } from '../../../../ignitus-Shared';

export const SeparatorContainer = styled.div`
  padding: 2rem;
  width: 30%;
`;

export const Separator = styled.hr`
  line-height: 0em;
  position: relative;
  outline: 0;
  border: 0;
  text-align: center;
  font-weight: ${Medium};
  height: 2.3em;
  opacity: 0.5;
  &:before {
    content: '';
    background: ${C.GreyTwo};
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    border-radius: 100%;
    padding: 0.5em;
    line-height: 1.5em;
    color: ${C.GreySecondaryText};
    background-color: ${C.GreyTwo};
  }
`;
