import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AUTH_SERVICE } from "./auth.token";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    private authService = inject(AUTH_SERVICE);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if(!this.authService.isAuthenticated()) {
            this.authService.login();
        }
        return this.authService.isAuthenticated();
    }
}
