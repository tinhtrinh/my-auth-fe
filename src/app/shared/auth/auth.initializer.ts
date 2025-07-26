import { IAuthService } from './i-auth.interface';

export const initializeAuth = (authService: IAuthService) => () => {
  if (typeof window !== 'undefined') {
    return authService.init();
  }
  return Promise.resolve();
}