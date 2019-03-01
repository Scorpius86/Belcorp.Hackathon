import { Path } from './path';
import { PostParameters, NetworkManager } from '../../common/networkmanager';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

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
