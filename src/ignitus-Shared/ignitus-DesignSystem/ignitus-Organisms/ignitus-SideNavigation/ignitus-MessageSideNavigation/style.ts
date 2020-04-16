import styled from '@emotion/styled';
import {
  White,
  IgnitusBlue,
  GreyLight,
  Red,
  boxShadowColor,
} from '../../../ignitus-Atoms/colors';
import {XS, MD, Normal} from '../../../ignitus-Atoms/fonts';
import {flexibleColDiv} from '../../../shared';

type Props = {
  border: boolean;
  marginTop: boolean;
  marginBottom: boolean;
};

export const MessageContainer = styled(flexibleColDiv)`
  background: ${White};
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 ${boxShadowColor};
  width: 14rem;
  height: 16rem;
`;

export const Layer = styled.div<Props>`
  border-bottom: ${props => (props.border ? `1px solid ${GreyLight}` : 'null')};
  color: ${IgnitusBlue};
  cursor: pointer;
  font-size: ${MD};
  font-weight: ${Normal};
  padding: 1rem 0;
  margin-top: ${props => (props.marginTop ? '0.5rem' : 'none')};
  margin-bottom: ${props => (props.marginBottom ? '0.5rem' : 'none')};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p,
  div {
    margin: 0 1rem;
  }
  &:hover {
    background-color: ${IgnitusBlue};
    p {
      color: ${White};
    }
  }
`;

export const Notification = styled(flexibleColDiv)`
  border-radius: 100%;
  padding: 0.2rem;
  background: ${Red};
  width: 1.5rem;
  height: 1.5rem;
  font-size: ${XS};
  color: ${White};
`;
