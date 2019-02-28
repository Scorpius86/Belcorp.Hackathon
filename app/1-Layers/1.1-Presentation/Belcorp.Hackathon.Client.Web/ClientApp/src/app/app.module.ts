import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as moment from 'moment';
import 'moment/locale/es';
import { registerLocaleData, CommonModule } from '@angular/common';
import localePe from '@angular/common/locales/es-PE';
import { LoadingService, SecurityGuardService, ConfigurationStorageService, ConfigurationService, StorageService } from './services';
import { NetworkManager } from './agents/common/networkmanager';
import { ConfigurationAgent } from './agents';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptor } from './agents/common/authentication-interceptor';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { AuthenticationModule } from './modules/security/authentication/authentication.module';
import { MainModule } from './modules/main/main.module';
import { CoreModule } from './modules/core/core.module';

registerLocaleData(localePe);

moment.locale('es');

export const MY_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AuthenticationModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    NetworkManager,
    StorageService,
    SecurityGuardService,
    ConfigurationAgent,
    ConfigurationStorageService,
    ConfigurationService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
