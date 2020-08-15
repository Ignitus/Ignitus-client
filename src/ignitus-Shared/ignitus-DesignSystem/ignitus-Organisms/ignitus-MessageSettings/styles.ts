import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as T from '../../ignitus-Atoms/typography';
import * as F from '../../ignitus-Atoms/fonts';
import { flexibleRowDiv } from '../../shared';

export const Container = styled.div`
  width: 40rem;
  height: 21rem;
  top: 100px;
  left: 100px;
  background: ${C.White};
  box-shadow: 0px 3px 6px ${C.boxShadowColor};
  border-radius: 1rem;
  position: relative;
`;

export const ItemContainer = styled(flexibleRowDiv)`
  left: 3rem;
  position: absolute;
  word-wrap: break-word;
`;

export const ItemText = styled(T.Paragraph)`
  font-family: ${F.PrimaryFamily};
  font-weight: ${F.Light};
  font-size: ${F.SM};
  color: ${C.GreySecondaryText};
  width: 22rem;
`;

export const CheckContainer = styled.div<{ selected?: boolean }>`
  width: 24px;
  height: 24px;
  background: ${props => (props.selected ? C.SecondaryColor : C.GreyLight)};
  border-radius: 5px;
  margin-right: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnContainer = styled(flexibleRowDiv)`
  position: absolute;
  width: 11.75rem;
  height: 2.8rem;
  background: ${C.SecondaryColor};
  border-radius: 2.38rem;
  right: 1.6rem;
  bottom: 1.9rem;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnText = styled(T.Paragraph)`
  font-size: ${F.MD};
  font-weight: ${F.Bold};
  font-family: ${F.PrimaryFamily};
  color: ${C.White};
`;
