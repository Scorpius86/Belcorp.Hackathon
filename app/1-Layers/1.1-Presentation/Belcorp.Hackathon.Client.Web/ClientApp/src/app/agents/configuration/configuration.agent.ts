import { Injectable } from '@angular/core';
import { NetworkManager, PostParameters } from '../common/networkmanager';
import { OperationsPaths } from './operations-paths';
import { Observable } from 'rxjs';
import { GetPublicConfigurationResponse } from './response/get-public-configuration.response';
import { GetConfigurationResponse } from './response/get-configuration.response';

@Injectable()
export class ConfigurationAgent {

  configurationUrl: string;

  constructor(private networkManager: NetworkManager) {
    this.configurationUrl = this.getBaseUrl();
  }

  getPublicConfiguration(): Observable<GetPublicConfigurationResponse> {
    const parameters = new PostParameters();
    parameters.PathOperation = this.configurationUrl + OperationsPaths.GetPublicConfiguration;
    parameters.RequestParameter = null;

    return this.networkManager.post(parameters) as Observable<GetPublicConfigurationResponse>;
  }

  getConfiguration(): Observable<GetConfigurationResponse> {
    const parameters = new PostParameters();
    parameters.PathOperation = this.configurationUrl + OperationsPaths.GetConfiguration;
    parameters.RequestParameter = null;

    return this.networkManager.post(parameters) as Observable<GetConfigurationResponse>;
  }

  private getBaseUrl() {
    const base = document.getElementsByTagName('base')[0].href;
    return base.endsWith('/') ? base : `${base}/`;
  }
}
