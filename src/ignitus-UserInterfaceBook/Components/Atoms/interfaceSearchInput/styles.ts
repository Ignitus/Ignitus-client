import styled from '@emotion/styled';
import * as C from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';
import * as F from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/fonts';
import Icon from '../../../../ignitus-Shared/ignitus-Utilities/Components/icon';

export const SearchInputContainer = styled.nav`
  padding: 2rem;
  height : 7em;
`;

export const Heading2 = styled.h2`
  font-weight: ${F.Normal};
  font-size: ${F.XXL};
  color: ${C.IgnitusBlue};
  border-radius: 1em;
  border-color: ${C.IgnitusBlue};
  width: 3em;
  height: 2em;
`;


export const StyledIcon = styled(Icon)`
  padding-left: 20px;
  height: 2.5rem;
  margin: 0.3rem;
  color: ${C.IgnitusBlue};
`;
