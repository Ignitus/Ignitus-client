import { AuthData } from '../../ignitus-Shared';

export interface LogInProps {
  logInRequestUsingEmail: Function;
  logInRequestUsingUsername: Function;
  logInData: AuthData;
  clearPreviousLogin: Function;
}
