import { Injectable } from '@angular/core';
import { NetworkManager, PostParameters } from '../common/networkmanager';
import { OperationsPaths } from './operations-paths';
import { Observable } from 'rxjs';
import { GetTokenRequest } from './request/get-token.request';
import { GetTokenResponse } from './response/get-token.response';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Injectable()
export class AuthenticationAgent {

  authenticationUrl: string;

  constructor(
    private networkManager: NetworkManager,
    private configurationService: ConfigurationService) {
  }

  getToken(validateUserRequest: GetTokenRequest): Observable<GetTokenResponse> {
    const self = this;
    return new Observable<GetTokenResponse>(observer => {
      this.configurationService.getPublicConfiguration().subscribe(configuration => {
          self.authenticationUrl = configuration.identityUrl;

          const parameters = new PostParameters();
          parameters.PathOperation = self.authenticationUrl + OperationsPaths.GetToken;
          parameters.RequestParameter = validateUserRequest;

          const getTokenCall = this.networkManager.getTokenPost(parameters);
          (getTokenCall as Observable<GetTokenResponse>).subscribe(
            getTokenResponse => {
              observer.next(getTokenResponse);
            },
            error => {
              observer.next(error);
            });
        },
        error => {
          observer.next(error);
        });
    });
  }
}
