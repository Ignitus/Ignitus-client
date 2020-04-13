import styled from '@emotion/styled';
import {
  BootStrapSection,
  flexibleRowDiv,
  flexibleColDiv,
} from '../../../shared';
import {SecondaryColor, IgnitusBlue} from '../../../ignitus-Atoms/colors';
import {Paragraph as P} from '../../../ignitus-Atoms/typography';
import { Bold } from '../../../ignitus-Atoms/fonts';

export const AuthenticationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

export const Container = styled(BootStrapSection)`
  margin: 2rem auto;
`;

export const Row = styled(flexibleRowDiv)``;

export const Paragraph = styled(P)`
  text-align: center;
  margin: 0.5rem 0;
  font-weight: 500;

  a {
    color: ${IgnitusBlue};
    font-weight: ${Bold};
  }
`;

export const LeftRow = styled(flexibleColDiv)`
  background: ${SecondaryColor};
  padding: 2rem;
`;

export const ColumnOne = styled.div``;
export const ColumnTwo = styled(flexibleColDiv)`
  padding: 1rem;
`;

export const Image = styled.img`
  width: 16rem;
`;

export const RightRow = styled(flexibleColDiv)`
  padding: 2rem;
`;
