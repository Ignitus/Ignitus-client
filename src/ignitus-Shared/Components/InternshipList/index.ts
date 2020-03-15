import styled from '@emotion/styled';
import * as T from '../../ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as C from '../../ignitus-DesignSystem/ignitus-Atoms/colors';
import {
  flexibleColDiv,
  flexibleRowDiv,
} from '../../ignitus-DesignSystem/shared';
import {Normal} from '../../ignitus-DesignSystem/ignitus-Atoms/fonts';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const ContainerList = styled(flexibleColDiv)`
  border: 2px solid black;
  padding: 2rem;
  margin-top: 100px;
`;

export const InternshipContainer = styled(flexibleRowDiv)`
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: ${C.White};
  margin: 0.5rem;
  padding: 1rem;
  width: 100%;
`;

export const DateBtnContainer = styled(flexibleColDiv)`
  padding: 0.5rem;
  border: 2px solid blue;
  flex: 1;
`;

export const DateContainer = styled(T.Heading6)`
  color: ${C.Grey1};
  font-weight: ${Normal};
`;

export const BtnContainer = styled(flexibleColDiv)`
  border: 2px solid blue;
  flex: 1;
`;

export const ImageDescriptionContainer = styled(flexibleRowDiv)`
  flex: 6;
`;

export const ImageContainer = styled(flexibleRowDiv)`
  flex: 1;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

export const OppurtunityTitle = styled(T.Heading3)``;

export const OppurtunitySubTitle = styled(T.Heading4)`
  font-weight: ${Normal};
  color: ${C.Grey1};
`;

export const OppurtunityDescription = styled(T.Heading5)`
  font-weight: ${Normal};
  color: ${C.GreyText};
`;
