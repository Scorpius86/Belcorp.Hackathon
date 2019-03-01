import { Path } from './path';
import { NetworkManager } from '../../common/networkmanager/network-manager';
import { PostParameters } from '../../common/networkmanager/post-parameters';
import { Observable } from 'rxjs';

export class BaseAgent {
  private paths: Array<Path> = new Array<Path>();
  constructor(private OperationsPaths: any, private url: string, public networkManager: NetworkManager) {
    this.extractPaths();
  }
  private extractPaths() {
    for (let element in this.OperationsPaths) {
      let data: any = this.OperationsPaths[element].split('/');
      this.paths.push({
        controllerName: data[0],
        actionName: data[1],
        url: this.url + element,
        urlBase: this.url
      });
    }
  }
  public getPath(actionName: string): Path {
    return this.paths.find(x => x.actionName === actionName);
  }

  public callOperationBlob(operationUrl: string, requestParameter: any, contentType: string): Observable<Blob> {
    const parameters: PostParameters = new PostParameters();
    parameters.PathOperation = operationUrl;
    parameters.RequestParameter = requestParameter;
    parameters.ContentType = contentType;
    return this.networkManager.postBlob(parameters) as Observable<Blob>;
  }
}
