import styled from '@emotion/styled';
import { minimumWidthQuery, IgnitusBlue } from '../ignitus-Shared';
import { RowTypes } from './types';
import {
  Container as C,
  flexibleColDiv,
} from '../ignitus-Shared/ignitus-DesignSystem/shared';

export const TextContainer = styled.div`
  text-align: center;
`;

export const TopSection = styled.div`
  background: ${IgnitusBlue};
  padding: 8rem 4rem 4rem;
  text-align: center;
`;

export const ParagraphWrapper = styled.div`
  text-align: ${(props: { alignment?: string }) => props.alignment};
  padding: 0.5rem 0;
`;

export const HeadingWrapper = styled.div`
  padding: 1rem 0;
  text-align: ${(props: { alignment?: string }) => props.alignment};
`;

export const Container = styled(C)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Section = styled(flexibleColDiv)`
  margin: 2rem 0;
`;

export const LeftRow = styled.div<RowTypes>`
  flex: ${props => props.flex};
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignment};
`;
export const RightRow = styled.div<RowTypes>`
  flex: ${props => props.flex};
  text-align: left;
`;

export const Wrapper = styled.div`
  padding: 0.5rem;
  text-align: left;
`;

export const OpportunityWrapper = styled.div`
  margin: 2rem 0;
`;

export const OpportunitySection = styled.div`
  width: 100%;
`;

export const PerksWrapper = styled.div`
  flex: 1 1 30%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-around;
  flex-direction: ${(props: { direction?: string }) => props.direction};
`;

export const Img = styled.img`
  ${minimumWidthQuery[1]} {
    width: 6rem;
  }
  ${minimumWidthQuery[2]} {
    width: 6rem;
  }
  ${minimumWidthQuery[3]} {
    width: 15rem;
  }
  ${minimumWidthQuery[4]} {
    width: 15rem;
  }
  ${minimumWidthQuery[5]} {
    width: 15rem;
  }
`;
