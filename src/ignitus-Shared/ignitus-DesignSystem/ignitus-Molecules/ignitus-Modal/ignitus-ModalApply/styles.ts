import styled from '@emotion/styled';
import { Paragraph as P, Normal, MD, White, boxShadowColor } from '../../../..';

import { flexibleColDiv, flexibleRowDiv } from '../../../shared';

export const ModalApply = styled.div`
  background-color: ${White};
  background-size: contain;
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  width: 40rem;
`;

export const TopSection = styled(flexibleColDiv)`
  padding: 0 5rem;
  align-items: flex-start;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const LeftSection = styled(flexibleColDiv)`
  padding: 0 2rem 0 5rem;
  align-items: flex-start;
`;

export const RightSection = styled(flexibleColDiv)`
  align-items: flex-start;
`;

export const BottomSection = styled(flexibleRowDiv)`
  padding: 0.4rem 0.8rem 1.5rem 1.5rem;
  justify-content: flex-end;
`;

export const Paragraph = styled(P)`
  font-weight: ${Normal};
  font-size: ${MD};
  margin: 2rem 0.6rem 0.6rem 0.6rem;
`;
