import styled from '@emotion/styled';
import * as A from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

export const UIKitContainer = styled.div`
  /* display: none; */
`;
export const SideNavigationContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const StyledHeading1 = styled(A.Heading1)`
  text-align: center;
`;

export const StyledHeading2 = styled(A.Heading2)`
  margin: 20px 0;
  font-weight: ${F.Medium};
`;

export const StyledHeading4 = styled(A.Heading4)`
  margin: 20px 0;
  color: ${C.GreyText};
`;

export const StyledHeading6 = styled(A.Heading6)`
  margin: 10px 0;
  color: ${C.GreyText};
`;

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
