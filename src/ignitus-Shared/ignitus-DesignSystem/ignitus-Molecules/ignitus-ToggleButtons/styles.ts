import styled from '@emotion/styled';
import Icon from '../../../ignitus-Utilities/Components/icon';

export const ToggleButton1 = styled.span`
  cursor: pointer;
`;

export const ToggleButton2 = styled.span`
  cursor: pointer;
`;

export const StyledIcon = styled(Icon)`
  width: 1.4rem;
  fill: ${props => props.color};
  transition: 0.3s;
  flex: 1;
  margin: 0.03rem;
`;
