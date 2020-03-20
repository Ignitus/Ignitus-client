import styled from '@emotion/styled';
import * as A from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import TwitterIcon from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/twitterIcon/twitterIcon';
import LinkedInIcon from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/linkedInIcon/linkedInIcon';
import AngelListIcon from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/angelListIcon/angelListIcon';

export const UIKitContainer = styled.div`
  /* display: none; */
`;
export const SideNavigationContainer = styled.div`
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const Heading1 = styled(A.Heading1)`
  text-align: center;
`;

export const Heading2 = styled(A.Heading2)`
  margin: 20px 0;
  font-weight: ${F.Medium};
`;

export const Heading4 = styled(A.Heading4)`
  margin: 20px 0;
  color: ${C.GreyText};
`;

export const Heading6 = styled(A.Heading6)`
  margin: 10px 0;
  color: ${C.GreyText};
`;

export const Card = styled(A.Card)`
  width: 60%;
`;

export const Twitter = styled(TwitterIcon)`
  height: 3rem;
  &:hover {
    fill: red;
  }
`;

export const LinkedIn = styled(LinkedInIcon)`
  height: 3rem;
`;

export const AngelList = styled(AngelListIcon)`
  height: 3rem;
`;

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
