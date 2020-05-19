import styled from '@emotion/styled';
import { Black, White, boxShadowColor } from '../../ignitus-Atoms/colors';
import { Normal, XS, XL, SemiBold } from '../../ignitus-Atoms/fonts';
import { Paragraph, Heading6 } from '../../ignitus-Atoms/typography';

export const Container = styled.div`
  box-shadow: 0 0.5rem 1rem 0 ${boxShadowColor};
  background-color: ${White};
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 1rem 2rem;
  flex-direction: row;
  max-width: 55rem;
`;

export const LeftRow = styled.div`
  img {
    max-width: 15rem;
    max-height: 15rem;
    margin: 0.5rem;
    border-radius: 1rem;
  }
`;

export const RightRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.5rem;
`;

export const Description = styled(Paragraph)`
  font-size: ${XL};
`;

export const SubTitle = styled.p`
  font-weight: ${SemiBold};
  color: ${Black};
  font-size: ${XS};
`;

export const Fund = styled(Heading6)`
  font-weight: ${Normal};
  font-size: ${XS};
`;

export const Wrapper = styled.div`
  margin: ${(props: { marginProp?: string }) => props.marginProp};
`;
