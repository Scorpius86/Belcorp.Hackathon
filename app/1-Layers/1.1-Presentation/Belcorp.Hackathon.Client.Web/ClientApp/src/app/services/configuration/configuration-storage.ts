import { Injectable } from '@angular/core';
import { StorageService } from '../common/storage';
import { ConfigurationServices } from 'src/app/models/configuration/configuration-services.model';

@Injectable()
export class ConfigurationStorageService {

  readonly configurationServicesKey = 'configurationServices';

  constructor(private storageService: StorageService) {
  }

  setConfigurationService(configurationServices: ConfigurationServices) {
    return this.storageService.store(this.configurationServicesKey, configurationServices);
  }

  getConfigurationService(): ConfigurationServices {
    return this.storageService.retrieve(this.configurationServicesKey);
  }

}
