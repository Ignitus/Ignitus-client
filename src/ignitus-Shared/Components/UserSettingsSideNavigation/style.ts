import styled from '@emotion/styled';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import {flexibleColDiv} from '../../ignitus-DesignSystem/ignitus-Atoms/atoms';
import {MD, Normal} from '../../ignitus-DesignSystem/ignitus-Atoms/fonts';

type Props = {
  border: boolean;
  marginTop: boolean;
  marginBottom: boolean;
};

export const SettingsContainer = styled(flexibleColDiv)`
  background: ${C.White};
  border-radius: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  width: 12rem;
`;

export const Layer = styled.div<Props>`
  border-bottom: ${props =>
    props.border ? `1px solid ${C.GreyLight}` : 'null'};
  color: ${C.IgnitusBlue};
  cursor: pointer;
  font-size: ${MD};
  font-weight: ${Normal};
  padding: 0.5rem;
  margin-top: ${props => (props.marginTop ? '0.5rem' : 'none')};
  margin-bottom: ${props => (props.marginBottom ? '0.5rem' : 'none')};
  text-align: center;
  width: 100%;
  &:hover {
    background-color: ${C.IgnitusBlue};
    color: ${C.White};
  }
`;
