import styled from '@emotion/styled';
import { Paragraph as P, Normal, MD, White, boxShadowColor } from '../../../..';
import { Icon } from '../../../../ignitus-Utilities/Components/icon';

import { flexibleColDiv, flexibleRowDiv } from '../../../shared';

export const ModalShare = styled.div`
  background-color: ${White};
  background-size: contain;
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  width: 35rem;
`;

export const TopSection = styled(flexibleRowDiv)`
  padding: 1.5rem;
  justify-content: space-between;
`;

export const BottomSection = styled(flexibleColDiv)`
  padding: 0.4rem 0.8rem 1.5rem 1.5rem;
  align-items: flex-start;
`;

export const IconsContainer = styled(flexibleRowDiv)`
  border-radius: 1rem;
  display: inline-flex;
`;

export const IconContainer = styled.button`
  border: none;
  cursor: pointer;
  overflow: hidden;
  margin: 0 0.2rem;
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  outline-color: transparent;
`;

export const Paragraph = styled(P)`
  font-weight: ${Normal};
  font-size: ${MD};
  margin: 2rem 0.6rem 0.6rem 0.6rem;
`;

export const StyledIcon = styled(Icon)`
  width: 1.4rem;
  fill: ${props => props.color};
  transition: 0.3s;
  flex: 1;
  margin-top: 0.2rem;
`;
