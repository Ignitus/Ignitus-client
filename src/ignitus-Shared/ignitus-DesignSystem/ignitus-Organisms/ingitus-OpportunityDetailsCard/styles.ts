import styled from '@emotion/styled';
import { Black, White, boxShadowColor } from '../../ignitus-Atoms/colors';
import { Normal, XS, XL, SemiBold } from '../../ignitus-Atoms/fonts';
import { Paragraph, Heading6 } from '../../ignitus-Atoms/typography';
import { minimumWidthQuery } from '../../ignitus-Atoms/media';

export const Container = styled.div`
  box-shadow: 0 0.5rem 1rem 0 ${boxShadowColor};
  background-color: ${White};
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  ${minimumWidthQuery[0]} {
    flex-direction: column;
    margin: 4rem 1rem 1rem 1rem;
    width: 100%;
  }
  ${minimumWidthQuery[2]} {
    flex-direction: row;
    margin: 4rem 3rem 1rem 3rem;
    width: 100%;
  }
  ${minimumWidthQuery[3]} {
    flex-direction: row;
    margin: 4rem 1.5rem 1rem 1.5rem;
    width: 100%;
  }
  ${minimumWidthQuery[4]} {
    flex-direction: row;
    margin: 4rem 2rem 1rem 2rem;
    max-width: 100%;
  }
  ${minimumWidthQuery[5]} {
    flex-direction: row;
    margin: 5rem 5rem 1rem 5rem;
    max-width: 55rem;
  }
`;
export const LeftRow = styled.div`
  img {
    max-width: 15rem;
    max-height: 15rem;
    margin: 1rem;
    border-radius: 1rem;
  }
`;

export const RightRow = styled.div`
  display: flex;
  flex-direction: column;
  ${minimumWidthQuery[0]} {
    margin-left: 1rem;
    align-items: center;
  }
  ${minimumWidthQuery[2]} {
    margin-left: 1rem;
    align-items: flex-start;
  }
  ${minimumWidthQuery[4]} {
    margin-left: 0.5rem;
  }
  ${minimumWidthQuery[5]} {
    margin-left: 0.5rem;
  }
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
