import styled from '@emotion/styled';
import {
  Paragraph as P,
  Normal,
  MD,
  White,
  boxShadowColor,
  SecondaryColor,
} from '../../../..';

import { flexibleColDiv, flexibleRowDiv } from '../../../shared';
import { RoundedButton } from '../../../ignitus-Atoms/buttons';
import { DefaultTag1 } from '../../../ignitus-Atoms/ignitus-defaultTag/Components/defaultTag';

export const ModalApply = styled.div`
  background-color: ${White};
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  padding: 2rem 4rem;
`;

export const TopSection = styled(flexibleColDiv)`
  align-items: flex-start;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
`;

export const LeftSection = styled(flexibleColDiv)`
  align-items: flex-start;
`;

export const RightSection = styled(flexibleColDiv)`
  align-items: flex-start;
  margin-left: 2rem;
`;

export const BottomSection = styled(flexibleRowDiv)`
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

export const Paragraph = styled(P)`
  font-weight: ${Normal};
  font-size: ${MD};
`;

export const StyledRoundedButton = styled(RoundedButton)`
  background: none;
  border: 2px solid ${SecondaryColor};
  color: ${SecondaryColor};
`;

export const StyledDefaultTag1 = styled(DefaultTag1)`
  padding: 0.7rem 1rem;
`;
