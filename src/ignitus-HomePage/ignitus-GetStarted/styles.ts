import styled from '@emotion/styled';
import {Paragraph as P} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import {
  XL,
  SM,
  Normal,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import {
  White,
  IgnitusBlue,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {flexibleColDiv} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';

export const Container = styled(flexibleColDiv)`
  background-color: ${IgnitusBlue};
  margin-top: 6rem;
  padding: 3rem 1.5rem;
`;

export const Paragraph = styled(P)`
  font-size: ${XL};
  font-weight: ${Normal};
  color: ${White};
  text-align: center;
  max-width: 60rem;
`;

export const TopSection = styled.div`
  margin-bottom: 1rem;
`;
export const BottomSection = styled.div`
  margin-top: 1rem;
`;
