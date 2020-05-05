import { AuthData } from '../../ignitus-Shared';

export interface LogInProps {
  logInRequest: Function;
  logInData: AuthData;
  clearPreviousLogin: Function;
}
