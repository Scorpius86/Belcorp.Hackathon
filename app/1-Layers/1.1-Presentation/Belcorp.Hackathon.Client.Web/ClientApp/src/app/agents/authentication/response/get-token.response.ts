import {BaseResponse} from '../../core/base-response';

export class GetTokenResponse extends BaseResponse {
  public access_token: string;
}
