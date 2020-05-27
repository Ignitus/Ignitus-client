import styled from '@emotion/styled';
import { White, GreyBackground, IgnitusBlue } from '../../ignitus-Atoms/colors';
import { SemiBold } from '../../ignitus-Atoms/fonts';
import { Heading4 } from '../../ignitus-Atoms/typography';
import { RoundedButton } from '../../ignitus-Atoms/buttons';
import I from '../../../ignitus-Utilities/Components/icon';

export const Container = styled.div`
  border-radius: 1rem;
  width: 26rem;
  background-color: ${White};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-height: 35rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  padding: 3rem;
  border-bottom: 0.2rem solid ${GreyBackground};
  overflow: hidden;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25rem;
  padding: 2rem;
`;

export const Heading = styled(Heading4)`
  font-weight: ${SemiBold};
`;

export const Button = styled(RoundedButton)`
  width: 11rem;
`;

export const Icon = styled(I)`
  fill: ${IgnitusBlue};
`;
