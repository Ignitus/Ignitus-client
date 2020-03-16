import styled from '@emotion/styled';
import * as C from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/colors';

export const SettingsContainer = styled.div`
  background: ${C.White};
  border-radius: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

export const Layer = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: ${C.IgnitusBlue};
  padding: 0.5rem;

  &:hover {
    background-color: ${C.IgnitusBlue};
    color: ${C.White};
  }
`;
