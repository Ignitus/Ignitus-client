import styled from '@emotion/styled';
import * as T from '../../ignitus-Atoms/typography';
import * as C from '../../ignitus-Atoms/colors';
import {flexibleColDiv, flexibleRowDiv} from '../../shared';
import {Normal, MD} from '../../ignitus-Atoms/fonts';
import ApplyIcon from '../../ignitus-Assets/ignitus-Icons/applyIcon/applyIcon';
import {Paragraph} from '../../shared';

export const OpportunityList = styled(flexibleColDiv)``;

export const OpportunityContainer = styled(flexibleRowDiv)`
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  background-color: ${C.White};
  padding: 1rem;
  width: 100%;
`;

export const DateBtnContainer = styled(flexibleColDiv)`
  padding: 0.5rem;
  border: 2px solid blue;
  flex: 1;
`;

export const DateContainer = styled(T.Heading6)`
  color: ${C.GreyOne};
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
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  padding-left: 1rem;
`;

export const OpportunityDescriptionBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OpportunityDescription = styled(T.Paragraph)`
  font-weight: ${Normal};
  color: ${C.GreyText};
  margin-top: 1rem;
`;

export const OpportunityDateTitle = styled.div`
  display: flex;s
  flex-direction: row;
`;

export const OpportunityTitle = styled(T.Heading3)`
  flex: 1;
`;

export const OpportunityData = styled(T.Paragraph)`
  color: ${C.GreyText};
  font-weight: ${Normal};
  flex: 1;
  text-align: end;
`;

export const OpportunitySubTitle = styled(T.Paragraph)`
  font-weight: ${Normal};
  color: ${C.GreyOne};
`;
