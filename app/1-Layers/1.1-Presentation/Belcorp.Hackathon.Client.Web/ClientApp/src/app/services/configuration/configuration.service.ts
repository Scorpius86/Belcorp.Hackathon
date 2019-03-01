import { Injectable } from '@angular/core';
import { ConfigurationAgent } from '../../agents/configuration/configuration.agent';
import { Observable } from 'rxjs';
import { Configuration } from '../../models/configuration/configuration.model';
import { ConfigurationStorageService } from './configuration-storage.service';
import { PublicConfiguration } from '../../models/configuration/public.configuration.model';


@Injectable()
export class ConfigurationService {

  constructor(
    private configurationAgent: ConfigurationAgent,
    private configurationStorageService: ConfigurationStorageService) {
  }

  getPublicConfiguration(): Observable<PublicConfiguration> {
    return new Observable<PublicConfiguration>(observer => {
      this.configurationAgent.getPublicConfiguration().subscribe(response => {
        if (response) {
          const publicConfiguration = new PublicConfiguration();
          publicConfiguration.identityUrl = response.IdentityUrl;
          this.configurationStorageService.setPublicConfiguration(publicConfiguration);
          observer.next(publicConfiguration);
        }
      });
    });
  }

  getConfiguration(): Observable<Configuration> {
    return new Observable<Configuration>(observer => {
      this.configurationAgent.getConfiguration().subscribe(response => {
        if (response) {
          const configuration = new Configuration();
          configuration.securityUrl = response.SecurityUrl;
          configuration.maintenanceUrl = response.MaintenanceUrl;
          this.configurationStorageService.setConfiguration(configuration);
          observer.next(configuration);
        }
      });
    });
  }
}
