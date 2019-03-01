import { Injectable } from '@angular/core';
import { NetworkManager } from '../common/networkmanager/network-manager';
import { Observable } from 'rxjs';
import { GetConfigurationServicesResponse } from './response/get-configuration-services-response';
import { PostParameters } from '../common/networkmanager/post-parameters';
import { OperationsPaths } from './operations-paths';

@Injectable()
export class ConfigurationAgent {

  configurationUrl: string;

  constructor(private networkManager: NetworkManager) {
    this.configurationUrl = this.getBaseUrl();
  }

  getConfigurationServices(): Observable<GetConfigurationServicesResponse> {
    const parameters = new PostParameters();
    parameters.PathOperation = this.configurationUrl + OperationsPaths.GetConfigurationServices;
    parameters.RequestParameter = null;

    return this.networkManager.post(parameters) as Observable<GetConfigurationServicesResponse>;
  }

  private getBaseUrl() {
    const base = document.getElementsByTagName('base')[0].href;
    return base.endsWith('/') ? base : `${base}/`;
  }
}
