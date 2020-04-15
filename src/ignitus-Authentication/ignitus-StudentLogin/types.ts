import {authData} from '../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-Authentication';

export interface LogInProps {
  logInRequest: Function;
  logInData: authData;
  clearPreviousLogin: Function;
};
