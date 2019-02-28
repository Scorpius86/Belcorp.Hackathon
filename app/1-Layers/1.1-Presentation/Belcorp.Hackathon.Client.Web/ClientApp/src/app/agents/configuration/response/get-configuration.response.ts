import { BaseResponse } from '../../core/base-response';

export class GetConfigurationResponse extends BaseResponse {
  public SecurityUrl: string;
  public MaintenanceUrl: string;
}
