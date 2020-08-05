import styled from '@emotion/styled';
import { Paragraph } from '../typography';
import { MD } from '../fonts';

export const CheckBox = styled.input`
  height: 1rem;
  width: 1rem;
  outline: none;
`;
export const Label = styled.label`
  margin-left: 0.4rem;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: ${MD};
`;

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;
