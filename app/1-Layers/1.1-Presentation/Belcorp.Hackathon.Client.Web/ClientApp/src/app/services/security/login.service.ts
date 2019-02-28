import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStorageService } from './login-storage.service';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/security/user.model';
import { AppConstants } from '../../shared/app.constants';

@Injectable()
export class LoginService {

  private redirectUrl = '';

  constructor(
    private router: Router,
    private loginStorageService: LoginStorageService
  ) {
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(redirectUrl: string) {
    this.redirectUrl = redirectUrl;
  }

  logOut(): void {
    this.loginStorageService.logOutUser();
    this.router.navigate([AppConstants.Routes.LOGIN]);
  }
}
