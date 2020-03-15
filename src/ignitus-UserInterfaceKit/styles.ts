import styled from '@emotion/styled';
import * as A from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as C from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import TwitterIcon from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Icons/twitterIcon/twitterIcon';

export const UIKitContainer = styled.div`
  padding: 5em;
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

export const Card = styled(A.Card)`
  width: 60%;
`;

export const Twitter = styled(TwitterIcon)`
  height: 5rem;
  &:hover {
    fill: red;
  }
`;
