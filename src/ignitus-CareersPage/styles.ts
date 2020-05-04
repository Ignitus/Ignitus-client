import styled from '@emotion/styled';
import { HeadingType, ParagraphType } from './types';
import { minimumWidthQuery, IgnitusBlue } from '../ignitus-Shared';

export const Container = styled.div`
  ${minimumWidthQuery[1]} {
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
  overflow: hidden;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const TopSection = styled.div`
  background: ${IgnitusBlue};
  padding: 8rem 4rem 4rem;
  text-align: center;
`;

export const ParagraphWrapper = styled.div<ParagraphType>`
  text-align: ${(props: { alignment?: string }) => props.alignment};
  padding: 0.5rem 0;
`;

export const HeadingWrapper = styled.div<HeadingType>`
  padding: 1rem 0;
  text-align: ${(props: { alignment?: string }) => props.alignment};
`;

export const Section = styled.div`
  flex-direction: column;
  ${minimumWidthQuery[1]} {
    margin: 0;
    padding: 0.5rem;
  }
  ${minimumWidthQuery[2]} {
    margin: 0;
    padding: 0.5rem;
  }
  ${minimumWidthQuery[3]} {
    margin: 3rem 10rem;
    padding: 1rem;
  }
  ${minimumWidthQuery[4]} {
    margin: 3rem 10rem;
    padding: 1rem;
  }
  ${minimumWidthQuery[5]} {
    margin: 3rem 10rem;
    padding: 1rem;
  }
  text-align: center;
`;

export const LeftRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RightRow = styled.div`
  flex: 1;
  text-align: left;
`;

export const Wrapper = styled.div`
  padding: 0.5rem;
  text-align: left;
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
  flex-direction: ${(props: { direction?: string }) => props.direction};
`;

export const Img = styled.img`
  ${minimumWidthQuery[1]} {
    width: 10rem;
  }
  ${minimumWidthQuery[2]} {
    width: 10rem;
  }
  ${minimumWidthQuery[3]} {
    width: 20rem;
  }
  ${minimumWidthQuery[4]} {
    width: 20rem;
  }
  ${minimumWidthQuery[5]} {
    width: 20rem;
  }
`;
