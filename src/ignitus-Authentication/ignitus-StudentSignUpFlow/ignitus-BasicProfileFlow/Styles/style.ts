import styled from '@emotion/styled';
import { Icon as I } from '../../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import * as C from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {
  flexibleRowDiv,
  flexibleColDiv,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/shared';
import { Input } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultInput/styles';

export const Icon = styled(I)`
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.4rem 0.2rem 0 0;
  height: 1.4rem;
  fill: ${props => props.color};
  background-color: ${props =>
    props.color === `${C.White}` ? `${C.IgnitusBlue}` : `${C.White}`};
`;

export const InputContainer = styled(flexibleColDiv)`
  flex: 2;
`;

export const ImageContainer = styled.img`
  width: 0.1rem;
  border-radius: 1rem;
  height: 10rem;
  flex: 1;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-right: 2rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const LeftRow = styled(flexibleRowDiv)`
  justify-content: flex-start;
`;

export const Text = styled(Input)`
  margin: 0.2rem;
`;

export const FirstText = styled(Text)`
  width: 50%;
`;

export const LastText = styled(Text)`
  width: 50%;
`;
