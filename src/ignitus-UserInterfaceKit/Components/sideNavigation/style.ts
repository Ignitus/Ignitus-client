import styled from '@emotion/styled';
import {Heading3} from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/atoms';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import Icon from '../../../ignitus-Shared/ignitus-Utilities/Components/icon';
import {flexibleRowDiv} from '../../../ignitus-Shared/ignitus-DesignSystem/shared';

export const NavigationContainer = styled.nav`
  width: 15rem;
  padding: 2rem;
  background: black;
`;

export const Heading = styled(Heading3)`
  color: ${C.White};
  margin-bottom: 0;
`;

export const UnorderedList = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  color: ${C.White};
  padding: 0.5rem;
  cursor: pointer;
`;

export const Arrow = styled(Icon)`
  height: 2rem;
  fill: ${C.White};
  cursor: pointer;
`;

export const HeadingArrowContainer = styled(flexibleRowDiv)`
  margin-top: 1rem;
  justify-content: unset;
`;
