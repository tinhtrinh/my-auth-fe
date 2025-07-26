import { Injectable, } from '@angular/core';
import Keycloak from 'keycloak-js';
import { IAuthService } from './i-auth.interface';
 
@Injectable({
  providedIn: 'root',
})
export class KeycloakAuthService implements IAuthService {
  private keycloak: Keycloak;

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'my-auth-realm',
      clientId: 'my-auth-client',
    });
  }
 
  init(): void {
    this.keycloak.init({});
  }
 
  isAuthenticated(): boolean {
    return !!this.keycloak.token;
  }

  login(): void {
    this.keycloak.login();
  }
}