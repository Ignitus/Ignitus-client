import styled from '@emotion/styled';
import * as A from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {GreyText} from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {Medium} from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

export const StyledHeading1 = styled(A.Heading1)`
  text-align: center;
`;

export const StyledHeading2 = styled(A.Heading2)`
  margin: 20px 0;
  font-weight: ${Medium};
`;

export const StyledHeading4 = styled(A.Heading4)`
  margin: 20px 0;
  color: ${GreyText};
`;

export const StyledHeading6 = styled(A.Heading6)`
  margin: 10px 0;
  color: ${GreyText};
`;

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
