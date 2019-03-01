import { GetNextPendingEncodingParameter } from "../parameters/get-next-pending-encoding.parameter";

export class GetNextPendingEncodingRequest {
  Parameters: GetNextPendingEncodingParameter;
  constructor() {
    this.Parameters = new GetNextPendingEncodingParameter();
  }
}
