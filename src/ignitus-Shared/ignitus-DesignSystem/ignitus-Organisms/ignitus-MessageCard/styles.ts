import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as T from '../../ignitus-Atoms/typography';
import { flexibleRowDiv } from '../../shared';
import { Normal } from '../../ignitus-Atoms/fonts';

export const MessageContainer = styled(flexibleRowDiv)`
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  background-color: ${C.White};
  padding: 0.1rem;
  width: 50%;
`;

export const ImageContainer = styled(flexibleRowDiv)`
  padding: 0.3rem;
  img {
    border-radius: 50%;
    width: 56px;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const MessageSubTitle = styled(T.Paragraph)`
  font-weight: ${Normal};
  color: ${C.GreyOne};
`;

export const MessageDateTitle = styled.div`
  color: ${C.GreyOne};
`;
