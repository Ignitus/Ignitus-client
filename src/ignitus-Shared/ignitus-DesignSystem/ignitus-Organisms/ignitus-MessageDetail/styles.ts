import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as T from '../../ignitus-Atoms/typography';
import * as F from '../../ignitus-Atoms/fonts';
import { flexibleRowDiv, flexibleColDiv, Paragraph } from '../../shared';
import { DefaultButtonWithIcon } from '../../..';

export const MessageContainer = styled(flexibleColDiv)`
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  background-color: ${C.White};
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  padding: 0.5rem;

  img {
    border-radius: 50%;
    width: 4rem;
    max-width: 100%;
    max-height: 100%;
  }

  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    stroke: ${C.White};
    fill: #219653;
    height: 2rem;
    width: 2rem;
  }
`;

export const MessageSubTitle = styled(T.Paragraph)`
  margin-left: 1rem;
`;

export const Sender = styled(T.Paragraph)`
  font-weight: ${F.Bold};
  font-size: ${F.MD};
  color: ${C.IgnitusBlue};
  margin-bottom: 0.5rem;
`;

export const SenderPosition = styled(T.Paragraph)`
  font-weight: ${F.Normal};
  font-size: ${F.SM};
  color: ${C.IgnitusBlue};
  margin-bottom: 0.5rem;
`;

export const MessageDateTitle = styled.div`
  text-align: right;
  margin-left: auto;
`;

export const Details = styled(T.Paragraph)`
  font-family: Open Sans;
  font-weight: ${F.Normal};
  font-size: ${F.SM};
  color: ${C.GreyOne};
  margin-bottom: 0.5rem;
`;

export const Message = styled(Paragraph)``;

export const TopSection = styled(flexibleRowDiv)`
  box-sizing: border-box;
  padding: 1rem 1rem 0 1rem;
  width: 100%;
`;

export const MiddleSection = styled(flexibleRowDiv)`
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
`;

export const BottomSection = styled(flexibleRowDiv)`
  box-sizing: border-box;
  padding-right: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  justify-content: flex-end;
`;

export const StyledDefaultButtonWithIcon = styled(DefaultButtonWithIcon)`
  flex-direction: row-reverse;
  box-shadow: 0 6px 12px ${C.boxShadowColorLight};
  border-radius: 1rem;
  font-weight: ${F.Bold};
  svg {
    margin-right: 0.2rem;
  }
`;

export const StyledLine = styled.hr`
  width: -webkit-fill-available;
`;
