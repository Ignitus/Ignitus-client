import styled from '@emotion/styled';
import {
  Container,
  flexibleRowDiv,
} from '../../ignitus-Shared/ignitus-DesignSystem/shared';

import {
  Heading5,
  Paragraph,
  Heading6,
} from '../../ignitus-Shared';
import {TitleProps} from './types';
import {default as I} from '../../ignitus-Shared/ignitus-Utilities/Components/icon';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import { minimumWidthQuery } from '../../ignitus-Shared';

export const ParentContainer = styled(Container)`
  margin: 10rem auto;
  background: ${C.White};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const MiddleSection = styled.div`
  padding: 2rem;
`;
export const ElementContainer = styled(Container)`
  margin: 1.5rem 0;
`;

export const Title = styled(Heading5)<TitleProps>`
  padding: 0.5rem 2rem;
  font-weight: ${props =>
    props.fontStyle === 'paragraph' ? F.Medium : F.Bold};
  font-size: ${props => (props.fontStyle === 'paragraph' ? F.SM : F.MD)};
  color: ${props =>
    props.fontStyle === 'paragraph' ? C.GreyText : C.IgnitusBlue};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled(I)`
  width: 1.5rem;
  fill: ${C.IgnitusBlue};
`;

export const Content = styled(Container)`
  margin-left: 3.6rem;
  margin-top: 1rem;
`;

export const University = styled(Heading5)`
  font-weight: ${F.SemiBold};
`;

export const Address = styled(Paragraph)`
  font-size: ${F.MD};
  color: ${C.GreySecondaryText};
  margin: 0.4rem 0;
`;

export const Date = styled(Paragraph)`
  margin: 0.4rem 0;
`;

export const ContributionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  ${minimumWidthQuery[0]} {
    flex-direction: column;
  }
  ${minimumWidthQuery[2]} {
    flex-direction: column;
  }
  ${minimumWidthQuery[3]} {
    flex-direction: row;
  }
  ${minimumWidthQuery[4]} {
    flex-direction: row;
  }
  ${minimumWidthQuery[5]} {
    flex-direction: row;
  }
`;

export const RecommendationsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LeftRow = styled(flexibleRowDiv)`
  flex-wrap: wrap;
  align-items: space-evenly;
  flex: 1;
`;

export const RightRow = styled(flexibleRowDiv)`
  flex: 2;
  margin-left: 2rem;
`;
export const Avatar = styled.img`
  margin: 1rem;
  width: 9rem;
  border-radius: 50%;
`;
export const Name = styled(Heading5)``;
export const Designation = styled(Heading6)`
  margin: 0.4rem 0;
`;

export const BottomSection = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 2rem;
`;
