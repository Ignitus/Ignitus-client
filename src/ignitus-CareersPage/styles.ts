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

export const PerksParagraphWrapper = styled(ParagraphWrapper)`
  width: 15rem;
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
  ${minimumWidthQuery[0]} {
    margin: 1rem 0;
  }
  ${minimumWidthQuery[3]} {
    margin: 0;
  }
`;
export const RightRow = styled.div<RowTypes>`
  flex: ${props => props.flex};
  text-align: left;
  ${minimumWidthQuery[0]} {
    margin: 1rem 0;
  }
  ${minimumWidthQuery[3]} {
    margin: 0;
  }
`;

export const PerksImageWrapper = styled.div`
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
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  ${minimumWidthQuery[0]} {
    flex: 1 1 100%;
  }
  ${minimumWidthQuery[1]} {
    flex: 1 1 100%;
  }
  ${minimumWidthQuery[2]} {
    flex: 1 1 50%;
  }
  ${minimumWidthQuery[3]} {
    flex: 1 1 30%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${(props: { direction?: string }) => props.direction};

  ${minimumWidthQuery[0]} {
    margin: 2rem 0;
    flex-direction: column;
  }
  ${minimumWidthQuery[3]} {
    flex-direction: ${(props: { direction?: string }) => props.direction};
    margin: 0;
  }
`;

export const PerksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  ${minimumWidthQuery[0]} {
    margin: 2rem 0;
    flex-direction: column;
  }
  ${minimumWidthQuery[3]} {
    flex-direction: row;
    margin: 0;
  }
`;

export const Img = styled.img`
  ${minimumWidthQuery[1]} {
    width: 10rem;
  }
  ${minimumWidthQuery[2]} {
    width: 10rem;
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
