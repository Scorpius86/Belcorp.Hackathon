import { Injectable } from '@angular/core';
import { StorageService } from '../common/storage.service';
import { Configuration } from '../../models/configuration/configuration.model';
import { PublicConfiguration } from '../../models/configuration/public.configuration.model';

@Injectable()
export class ConfigurationStorageService {

  readonly publicConfigurationKey = 'publicConfiguration';
  readonly configurationKey = 'configuration';

  constructor(private storageService: StorageService) {
  }

  setPublicConfiguration(publicConfiguration: PublicConfiguration) {
    return this.storageService.store(this.publicConfigurationKey, publicConfiguration);
  }

  setConfiguration(configuration: Configuration) {
    return this.storageService.store(this.configurationKey, configuration);
  }

  getPublicConfiguration(): PublicConfiguration {
    return this.storageService.retrieve(this.publicConfigurationKey);
  }

  getConfiguration(): Configuration {
    let config: Configuration = this.storageService.retrieve(this.configurationKey) || new Configuration();
    return config;
  }
}
