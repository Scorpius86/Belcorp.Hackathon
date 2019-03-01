import { Injectable } from '@angular/core';
import { BaseAgent } from '../core/agent/base-agent';
import { NetworkManager } from '../common/networkmanager/network-manager';
import { SecurityPaths } from './security-paths';
import { ConfigurationStorageService } from 'src/app/services/configuration/configuration-storage';

@Injectable()
export class SecurityAgent extends BaseAgent {
  constructor(
    networkManager: NetworkManager,
    private configurationStorageService: ConfigurationStorageService) {
    super(SecurityPaths, configurationStorageService.getConfigurationService().ApiServer, networkManager);
  }
}
