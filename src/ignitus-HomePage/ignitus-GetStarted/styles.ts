import styled from '@emotion/styled';
import {
  Button as B,
  XL,
  Normal,
  Paragraph as P,
  White,
  IgnitusBlue,
} from '../../ignitus-Shared';
import { flexibleColDiv } from '../../ignitus-Shared/ignitus-DesignSystem/shared';

export const Container = styled(flexibleColDiv)`
  background-color: ${IgnitusBlue};
  margin-top: 4rem;
  padding: 3rem 1.5rem;
`;

export const Paragraph = styled(P)`
  font-size: ${XL};
  font-weight: ${Normal};
  color: ${White};
  text-align: center;
  max-width: 60rem;
`;

export const Button = styled(B)`
  border-radius: 2rem;
`;

export const TopSection = styled.div`
  margin: 1rem 0;
`;
export const BottomSection = styled.div`
  margin: 1rem 0;
`;
