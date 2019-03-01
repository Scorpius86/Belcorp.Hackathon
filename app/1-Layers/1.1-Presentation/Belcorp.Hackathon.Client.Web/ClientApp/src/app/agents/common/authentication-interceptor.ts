import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService, LoginStorageService } from '../../../app/services';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(
    private loginService: LoginService,
    private loginStorageService: LoginStorageService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isTokenRequest = request.url.indexOf('connect/token') !== -1;
    const isPublicConfiguration = request.url.indexOf('Configuration/GetPublicConfiguration') !== -1;
    const isConfiguration = request.url.indexOf('Configuration/GetConfiguration') !== -1;
    if (isTokenRequest || isPublicConfiguration || isConfiguration) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.loginStorageService.getLoggedInUser().Token}`
      }
    });

    return next.handle(request)
      .pipe(
        tap(
          (event: HttpEvent<any>) => { if (event instanceof HttpResponse) { } },
          (err: any) => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
              this.loginService.logOut();
            }
          }
        )
      );
  }
}
