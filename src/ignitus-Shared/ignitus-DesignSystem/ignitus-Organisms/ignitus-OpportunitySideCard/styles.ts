import styled from '@emotion/styled';
import { White, GreyBackground, IgnitusBlue } from '../../ignitus-Atoms/colors';
import { SemiBold } from '../../ignitus-Atoms/fonts';
import { Heading4 } from '../../ignitus-Atoms/typography';
import { RoundedButton } from '../../ignitus-Atoms/buttons';
import { Icon as I } from '../../../ignitus-Utilities/Components/icon';
import { StatusType } from './types';

export const Container = styled.div`
  border-radius: 1rem;
  background-color: ${White};
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 18rem;
  padding: 2rem;
  border-bottom: 0.2rem solid ${GreyBackground};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Heading = styled(Heading4)`
  font-weight: ${SemiBold};
`;

export const Button = styled(RoundedButton)`
  width: 12rem;
`;

export const Share = styled(I)`
  fill: ${IgnitusBlue};
  margin-right: 0.2rem;
`;

export const ApplyStatus = styled(I)<StatusType>`
  fill: ${White};
  display: ${props => (props.status === 'Applied' ? 'inline-block' : 'none')};
`;
