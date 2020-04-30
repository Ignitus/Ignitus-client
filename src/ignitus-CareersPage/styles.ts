import styled from '@emotion/styled';
import * as C from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import { StyleTypes} from './types';
import {Heading4} from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {minimumWidthQuery} from '../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/media';

export const Container = styled.div`
  background-color: ${C.White};

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

export const TopSection = styled.div`
  background: ${C.IgnitusBlue};
  padding: 9rem 4rem 4rem 4rem;
  text-align: center;
`;

export const Heading = styled.p`
  color: ${(props: StyleTypes) => props.color === 'white' ? C.White : C.IgnitusBlue };
  font-weight: ${F.Light};
  font-size: ${F.XXXXL}
`;

export const Paragraph = styled(Heading4)`
  color: ${C.GreySecondaryText};
  font-weight: ${(props: StyleTypes) => props.weight === 'bold' ? F.SemiBold : F.Light};
`;

export const Section = styled.div`
    margin: 3rem 10rem ;
    padding: 1rem;
    text-align: center;
`;

export const Wrapper = styled.div`
  padding: 0.5rem;
  text-align: ${(props: StyleTypes) => props.align === 'left' ? 'left' : 'center'};
  flex:${(props: StyleTypes) => props.flex === '1' ? '1' : ''};
`;

export const BenefitWrapper = styled.div`
  flex: 1 1 30%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-contents: flex-start;
`;

export const FlexRow = styled.div`
  display:flex;
  flex-direction: ${(props: StyleTypes) => props.direction };
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

