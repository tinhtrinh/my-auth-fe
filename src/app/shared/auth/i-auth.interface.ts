export interface IAuthService {
  init(): void;
  isAuthenticated(): boolean;
  login(): void;
}