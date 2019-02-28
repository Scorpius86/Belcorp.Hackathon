import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AppConstants } from '../../shared/app.constants';
import { LoginService } from './login.service';
import { LoginStorageService } from './login-storage.service';

@Injectable()
export class SecurityGuardService implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private loginStorageService: LoginStorageService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoginURL(state.url)) { return true; }

    if (!this.loginStorageService.isUserLoggedIn()) {
      this.loginService.setRedirectUrl(state.url);
      this.router.navigate([AppConstants.Routes.LOGIN]);
      return false;
    }
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  private isLoginURL(url) {
    return url === AppConstants.Routes.LOGIN;
  }
}
