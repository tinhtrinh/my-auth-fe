import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { KeycloakAngularModule } from 'keycloak-angular';
import { AUTH_SERVICE } from './shared/auth/auth.token';
import { KeycloakAuthService } from './shared/auth/keycloak-auth.service';
import { initializeAuth } from './shared/auth/auth.initializer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    { provide: AUTH_SERVICE, useClass: KeycloakAuthService },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuth,
      deps: [AUTH_SERVICE],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
