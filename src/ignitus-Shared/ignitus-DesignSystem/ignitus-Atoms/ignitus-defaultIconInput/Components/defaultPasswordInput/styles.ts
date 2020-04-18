import styled from '@emotion/styled';

import {Normal, SM} from '../../../fonts';
import Icon from '../../../../../ignitus-Utilities/Components/icon';
import {GreyLight, IgnitusBlue, GreyText, White} from '../../../colors';

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 0.5rem;
  background: ${White};

  input {
    padding: 0.5rem;
    outline: none;
    border: none;
    font-size: ${SM};
    font-weight: ${Normal};
    color: ${GreyText};
    border: 1px solid ${GreyLight};
    &:hover {
      border: 1px solid ${IgnitusBlue};
    }
  }
  svg {
    width: 1.4rem;
    height: 1.4rem;
    padding: 0.45rem;
    
    margin: 0;
    &:first-of-type {
      fill: ${White};
      background: ${IgnitusBlue};
      border-radius: 0.5rem 0 0 0.5rem;
    }

    &:last-of-type {
      background: ${GreyLight};
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
`;

export const Input = styled.input``;

export const StyledIcon = styled(Icon)``;
