import styled from '@emotion/styled';
import {
  BootStrapSection,
  flexibleRowDiv,
  flexibleColDiv,
} from '../../../shared';
import {
  SecondaryColor,
  IgnitusBlue,
  White,
} from '../../../ignitus-Atoms/colors';
import {Paragraph as P} from '../../../ignitus-Atoms/typography';
import {Bold} from '../../../ignitus-Atoms/fonts';

export const AuthenticationWrapper = styled(BootStrapSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 4rem;
`;

export const Container = styled.div`
  background: ${IgnitusBlue};
`;

export const Row = styled(flexibleRowDiv)`
  margin: 2rem 0;
`;

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
  flex: 1;
`;

export const RightColumnOne = styled.div``;
export const RightColumnTwo = styled(flexibleColDiv)`
  padding: 1rem;
`;

export const Image = styled.img`
  width: 16rem;
`;

export const RightRow = styled(flexibleColDiv)`
  padding: 2rem;
  flex: 1;
  background: ${White};
`;

export const LeftColumnOne = styled.div`
  margin: 1rem;
`;
export const LeftColumnTwo = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputContainer = styled.div``;
