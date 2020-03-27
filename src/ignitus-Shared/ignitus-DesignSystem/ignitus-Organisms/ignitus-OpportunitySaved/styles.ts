import styled from '@emotion/styled';
import * as T from '../../ignitus-Atoms/typography';
import * as C from '../../ignitus-Atoms/colors';
import { flexibleRowDiv } from '../../shared';
import { Normal, SemiBold, Bold, XS} from '../../ignitus-Atoms/fonts';

export const OpportunityContainer = styled(flexibleRowDiv)`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${C.White};
  border-radius: 20px;
  width: 80%;
`;

export const ImageDescriptionContainer = styled(flexibleRowDiv)`
  flex: 4;
`;

export const ImageContainer = styled(flexibleRowDiv)`
  flex: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-left: 20px;
`;

export const OpportunityDescription = styled(T.Heading6)`
  font-weight: ${Normal};
  color: ${C.Black};
  margin-right: 25px;
`;

export const OpportunityTitle = styled(T.Heading4)`
  flex: 1;
  font-weight: ${Bold};
`;

export const OpportunitySubTitle = styled.div`
  font-weight: ${SemiBold};
  color: ${C.GreySecondaryText};
  font-size: ${XS};
  padding-bottom: 8px;
  margin-top: -5px;
`;