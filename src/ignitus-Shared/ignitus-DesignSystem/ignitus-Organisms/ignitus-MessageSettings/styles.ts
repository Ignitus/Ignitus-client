import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import * as F from '../../ignitus-Atoms/fonts';
import { flexibleRowDiv, flexibleColDiv } from '../../shared';
import { Button } from '../../ignitus-Atoms/buttons';

export const Container = styled.div`
  width: 40rem;
  height: 21rem;
  background: ${C.White};
  box-shadow: 0px 3px 6px ${C.boxShadowColor};
  border-radius: 1rem;
  position: relative;
`;

export const ListContainer = styled(flexibleColDiv)`
  padding-left: 3rem;
  align-items: flex-start;
  padding-top: 2.6rem;
`;

export const ItemContainer = styled(flexibleRowDiv)`
  word-wrap: break-word;
  margin-bottom: 1.75rem;
`;

export const CustomButton = styled(Button)`
  position: absolute;
  width: 11.75rem;
  height: 2.8rem;
  background: ${C.SecondaryColor};
  border-radius: 2.38rem;
  right: 1.6rem;
  bottom: 1.9rem;
  font-size: ${F.MD};
  font-weight: ${F.Bold};
  font-family: ${F.PrimaryFamily};
  color: ${C.White};
`;
