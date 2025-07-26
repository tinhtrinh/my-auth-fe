import { InjectionToken } from '@angular/core';
import { IAuthService } from './i-auth.interface';

export const AUTH_SERVICE = new InjectionToken<IAuthService>('AUTH_SERVICE');