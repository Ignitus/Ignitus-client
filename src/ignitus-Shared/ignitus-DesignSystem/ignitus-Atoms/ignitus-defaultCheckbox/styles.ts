import styled from '@emotion/styled';
import { Paragraph } from '../typography';
import { LabelType } from './types';

export const CheckBox = styled.input`
  height: 1rem;
  width: 1rem;
  outline: none;
`;
export const Label = styled.label`
  margin-left: 0.4rem;
`;

export const StyledParagraph = styled(Paragraph)<LabelType>`
  font-size: ${props => props.size};
`;

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;
