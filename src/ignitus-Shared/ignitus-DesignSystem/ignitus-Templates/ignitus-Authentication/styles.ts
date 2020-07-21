import styled from '@emotion/styled';
import { BootStrapSection, flexibleColDiv } from '../../shared';

import {
  SecondaryColor,
  IgnitusBlue,
  White,
  GreyLight,
} from '../../ignitus-Atoms/colors';

import { Paragraph as P } from '../../ignitus-Atoms/typography';
import { Bold } from '../../ignitus-Atoms/fonts';
import { DefaultIconInput } from '../../ignitus-Atoms/ignitus-defaultIconInput/Components/defaultIconInput';
import { DefaultPasswordInput } from '../../ignitus-Atoms/ignitus-defaultIconInput/Components/defaultPasswordInput';
import { Button as B } from '../../ignitus-Atoms/buttons';
import { minimumWidthQuery } from '../../ignitus-Atoms/media';

import {
  MessageProps,
  getMessageColor,
} from '../../../ignitus-Utilities/HelperFunctions/emotionHelpers';

import { Icon } from '../../../ignitus-Utilities/Components/icon';

export const AuthenticationWrapper = styled(BootStrapSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 4rem;
`;

export const Container = styled.div`
  background: ${IgnitusBlue};
  margin-top: 3rem;
`;

export const Row = styled.div`
  display: grid;

  ${minimumWidthQuery[1]} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
  }
  ${minimumWidthQuery[2]} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
  }
  ${minimumWidthQuery[3]} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
  }
  ${minimumWidthQuery[4]} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  }
  ${minimumWidthQuery[5]} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  }
`;

export const Paragraph = styled(P)`
  text-align: center;
  margin: 0.5rem 0;
  font-weight: 500;

  a {
    color: ${IgnitusBlue};
    font-weight: ${Bold};
  }
`;

export const LeftRow = styled(flexibleColDiv)`
  background: ${SecondaryColor};
  padding: 1rem;
  flex: 1;
`;

export const RightColumnOne = styled.div``;
export const RightColumnTwo = styled(flexibleColDiv)`
  padding: 1rem;
`;

export const Image = styled.img`
  width: 16rem;
  height: 16rem;
  ${minimumWidthQuery[1]} {
    width: 10rem;
    height: 10rem;
  }
  ${minimumWidthQuery[2]} {
    width: 14rem;
    height: 14rem;
  }
  ${minimumWidthQuery[5]} {
    width: 16rem;
    height: 16rem;
  }
`;

export const RightRow = styled(flexibleColDiv)`
  padding: 1rem;
  flex: 1;
  background: ${White};
`;

export const LeftColumnOne = styled.div`
  margin: 1rem;
`;
export const LeftColumnTwo = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EmailInput = styled(DefaultIconInput)`
  flex-direction: row-reverse;
  padding: 0;
  background: ${IgnitusBlue};
  margin: 0.5rem 0;
  border: none;
  &:hover {
    border: none;
  }

  input {
    width: 12.5rem;
    padding: 0.5rem;
    background: ${White};
    border: 1px solid ${GreyLight};
    &:hover {
      border: 1px solid ${IgnitusBlue};
    }
  }
  svg {
    margin: 0 0.5rem;
    fill: ${White};
  }
`;

export const UsernameInput = styled(EmailInput)``;

export const EmailUsernameInput = styled(EmailInput)``;

export const ConfirmPasswordInput = styled(EmailInput)``;

export const PasswordInput = styled(DefaultPasswordInput)`
  padding: 0;
  margin: 0.5rem 0 0.5rem 1.6rem;
`;

export const InputGroup = styled(flexibleColDiv)``;
export const Button = styled(B)`
  border-radius: 0.5rem;
`;

export const ButtonContainer = styled.div`
  outline: none;
  margin-top: 3rem;
`;

export const Message = styled.div<MessageProps>`
  margin: 0.2rem 0;
  background-color: ${props => getMessageColor(props)};
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;

  p {
    color: ${White};
  }
`;

export const Logo = styled(Icon)`
  width: 5rem;
  fill: ${IgnitusBlue};
`;
