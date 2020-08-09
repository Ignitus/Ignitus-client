import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import { Paragraph } from '../../ignitus-Atoms/typography';
import * as F from '../../ignitus-Atoms/fonts';
import { flexibleRowDiv } from '../../shared';
import { Icon } from '../../../ignitus-Utilities/Components/icon';
import { DefaultCheckbox } from '../../..';
import { RoundedButton } from '../../ignitus-Atoms/buttons';

export const DeleteContainer = styled.div`
  background-color: ${C.White};
  background-size: contain;
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  width: 40rem;
`;

export const TopSection = styled(flexibleRowDiv)`
  padding: 1.5rem;
  justify-content: space-between;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 1.5rem;
  justify-content: flex-start;
`;

export const BottomSection = styled(flexibleRowDiv)`
  padding: 1.5rem;
  justify-content: flex-end;
`;

export const StyledIcon = styled(Icon)`
  width: 1.4rem;
  fill: ${props => props.color};
  transition: 0.3s;
  flex: 1;
  margin-top: 0.2rem;
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

export const StyledParagraph = styled(Paragraph)`
  padding: 1rem 0;
`;

export const StyledCheckbox = styled(DefaultCheckbox)`
  font-size: ${F.SM};
`;

export const StyledTextArea = styled.textarea`
  background-color: ${C.GreyLight};
  padding: 1rem;
  color: ${C.GreySecondaryText};
  font-weight: ${F.SemiBold};
  font-size: ${F.MD};
  border: none;
  border-radius: 1rem;

  ::placeholder {
    color: ${C.GreySecondaryText};
    font-weight: ${F.SemiBold};
    font-size: ${F.MD};
    opacity: 0.5;
  }
`;

export const StyledRoundedButton = styled(RoundedButton)`
  border: 0.25px solid #c4c4c4;
`;
