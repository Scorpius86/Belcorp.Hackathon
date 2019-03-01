import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginService, LoginStorageService } from '../../../../app/services';
import { AuthenticationRoutingModule } from './authentication.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginStorageService,
    LoginService
  ]
})
export class AuthenticationModule { }
