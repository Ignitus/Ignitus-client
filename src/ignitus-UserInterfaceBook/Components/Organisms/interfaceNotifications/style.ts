import styled from '@emotion/styled';
import { Notifications } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Notifications/Components';
import { Icon } from '../../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import { Interface } from '../../../styles';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex: 1;
`;

export const StyledNotifications = styled(Notifications)`
  height: 2rem;
  width: 70%;
  padding: 1rem;
`;

export const Text = styled.span`
  font-weight: bold;
  color: ${props => props.color};
`;

export const StyledIcon = styled(Icon)`
  width: 1.4rem;
  fill: ${props => props.color};
  transition: 0.3s;
  flex: 1;
  margin: 0.03rem 0.03rem 0.03rem 10rem;
`;

export const StyledInterface = styled(Interface)`
  display: flex;
  flex-direction: column;
`;
