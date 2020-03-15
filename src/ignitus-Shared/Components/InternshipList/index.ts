import styled from '@emotion/styled';
import * as T from '../../ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as C from '../../ignitus-DesignSystem/ignitus-Atoms/colors';
import {
  flexibleColDiv,
  flexibleRowDiv,
} from '../../ignitus-DesignSystem/shared';
import {Normal, MD} from '../../ignitus-DesignSystem/ignitus-Atoms/fonts';
import ApplyIcon from '../../ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/applyIcon/applyIcon';
import {Paragraph} from '../../ignitus-DesignSystem/shared';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const OpportunityList = styled(flexibleColDiv)`
  padding: 2rem;
  margin-top: 100px;
`;

export const OpportunityContainer = styled(flexibleRowDiv)`
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

export const BtnContainer = styled(flexibleRowDiv)`
  padding: 5px 10px;
  border: 2px solid ${C.IgnitusBlue};
  border-radius: 5px;
  cursor: pointer;
`;

export const BtnContainerText = styled(Paragraph)`
  font-size: ${MD};
  font-weight: ${Normal};
  margin-bottom: 0;
  margin-left: 10px;
  color: ${C.IgnitusBlue};
`;

export const BtnContainerIcon = styled(ApplyIcon)`
  height: 1.5rem;
  fill: ${C.IgnitusBlue};
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

export const OpportunityDescriptionBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OpportunityDescription = styled(T.Heading5)`
  font-weight: ${Normal};
  color: ${C.Black};
`;

export const OpportunityDateTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OpportunityTitle = styled(T.Heading3)`
  flex: 1;
`;

export const OpportunityData = styled(T.Heading6)`
  color: ${C.Grey1};
  font-weight: ${Normal};
  flex: 1;
  text-align: end;
`;

export const OpportunitySubTitle = styled(T.Heading4)`
  font-weight: ${Normal};
  color: ${C.Grey1};
`;
