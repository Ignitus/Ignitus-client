import styled from '@emotion/styled';
import * as C from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {flexibleRowDiv} from '../../ignitus-Shared/ignitus-DesignSystem/shared';
import {
  XL,
  LG,
  XXL,
} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';

const ContainerBackground: string =
  'https://storage.googleapis.com/ignitus_assets/ig-assets/splitBlueBackground.png';

export const Container = styled(flexibleRowDiv)`
  background: url(${ContainerBackground}) no-repeat;
  background-size: 70%;
  background-position: top right;
  padding: 4rem;
`;

export const Title = styled.h1`
  color: ${C.IgnitusBlue};
  font-size: 64px;
  font-weight: 500;
  letter-spacing: 4px;
`;

export const PrimaryText = styled.p`
  color: ${C.Black};
  font-size: ${XL};
  letter-spacing: 4px;
`;

export const SecondaryText = styled.p`
  color: ${C.Black};
  font-size: ${LG};
  letter-spacing: 4px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.h1`
  color: ${C.IgnitusBlue};
  font-size: 78px;
  font-weight: 500;
  letter-spacing: 4px;
`;
