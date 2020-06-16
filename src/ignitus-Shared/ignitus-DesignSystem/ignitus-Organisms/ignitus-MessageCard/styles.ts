import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as T from '../../ignitus-Atoms/typography';
import * as F from '../../ignitus-Atoms/fonts';
import { flexibleRowDiv } from '../../shared';

export const MessageContainer = styled(flexibleRowDiv)`
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  background-color: ${C.White};
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const ImageContainer = styled(flexibleRowDiv)`
  img {
    position: relative;
    border-radius: 50%;
    width: 56px;
    max-width: 100%;
    max-height: 100%;
  }
  svg {
    position: absolute;
    padding: 10px;
    stroke: white;
    fill: #219653;
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
