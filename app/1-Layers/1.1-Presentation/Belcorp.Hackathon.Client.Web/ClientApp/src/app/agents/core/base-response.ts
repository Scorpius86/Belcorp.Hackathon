import { BaseStateResponse } from './base-state.response';

export class BaseResponse {

  public State: BaseStateResponse;

  constructor() {
    this.State = new BaseStateResponse();
  }
}
