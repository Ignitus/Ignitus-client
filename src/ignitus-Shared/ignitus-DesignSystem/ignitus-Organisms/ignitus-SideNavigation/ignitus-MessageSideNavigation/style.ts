import styled from '@emotion/styled';
import {White, IgnitusBlue, GreyLight} from '../../../ignitus-Atoms/colors';
import {flexibleColDiv} from '../../../ignitus-Atoms/atoms';
import {MD, Normal} from '../../../ignitus-Atoms/fonts';

type Props = {
  border: boolean;
  marginTop: boolean;
  marginBottom: boolean;
};

export const MessageContainer = styled(flexibleColDiv)`
  background: ${White};
  border-radius: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  width: 12rem;
  height: 16rem;
`;

export const Layer = styled.div<Props>`
  border-bottom: ${props => (props.border ? `1px solid ${GreyLight}` : 'null')};
  color: ${IgnitusBlue};
  cursor: pointer;
  font-size: ${MD};
  font-weight: ${Normal};
  padding: 1rem;
  margin-top: ${props => (props.marginTop ? '0.5rem' : 'none')};
  margin-bottom: ${props => (props.marginBottom ? '0.5rem' : 'none')};
  text-align: center;
  width: 100%;
  &:hover {
    background-color: ${IgnitusBlue};
    color: ${White};
  }
`;
