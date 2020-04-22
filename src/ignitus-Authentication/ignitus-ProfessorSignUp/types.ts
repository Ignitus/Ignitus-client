import {authData} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Authentication';

export interface Props {
  signUpRequest: Function;
  signUpData: authData;
  clearPreviousSignUp: Function;
}
