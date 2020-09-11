import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as F from '../../ignitus-Atoms/fonts';
import { RoundedButton } from '../../ignitus-Atoms/buttons';

export const Container = styled.div`
  background: ${C.White};
  box-shadow: 0px 3px 6px ${C.boxShadowColor};
  border-radius: 1rem;
  padding: 1.5rem;
  width: 40rem;
`;

export const StyledCheckboxContainer = styled.div`
  padding: 0.7rem 1rem;
`;

export const StyledButton = styled(RoundedButton)`
  background: ${C.SecondaryColor};
  font-size: ${F.MD};
  font-weight: ${F.Bold};
  color: ${C.White};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 2rem;
`;
