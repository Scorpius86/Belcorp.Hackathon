import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { PostParameters } from './post-parameters';
import { BaseResponse } from '../../core/base-response';
import { Observable } from 'rxjs';

@Injectable()
export class NetworkManager {

  private static log(error: any) {
    if (error.status !== 401) {
      // console.error('CUSTOM ERROR');
      // console.log(error);
    }
  }

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  post(postParameters: PostParameters): Observable<BaseResponse> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const options = { headers: headers };
    const parameters = postParameters.RequestParameter || null;

    return Observable.create(observer => {
      this.httpClient.post(`${postParameters.PathOperation}`, JSON.stringify(parameters), options).subscribe(
        response => {
          try {
            const baseResponse: BaseResponse = <BaseResponse>response;
            if (baseResponse.State.HasError) {
              this.snackBar.open(baseResponse.State.MensajeError, 'close', { duration: 5000 });
              observer.error(baseResponse);
            } else {
              observer.next(response);
            }
          } catch (e) {
            this.snackBar.open(e.message, 'close', { duration: 5000 });
            observer.error(e);
          }
        },
        httpError => {
          this.snackBar.open('Ha ocurrido un error al tratar de procesar la acción requerida.', 'close', { duration: 5000 });
          NetworkManager.log(httpError);
          observer.error(httpError);
        },
        () => {
          observer.complete();
        });
    });
  }

  postBlob(postParameters: PostParameters): Observable<Blob> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const parameters = postParameters.RequestParameter || null;

    return Observable.create(observer => {
      const operationUrl = `${postParameters.PathOperation}`;
      this.httpClient.post(operationUrl, JSON.stringify(parameters), { headers: headers, responseType: 'blob' }).subscribe(
        response => {
          try {
            const blobResponse: Blob = new Blob([response], { type: postParameters.ContentType });
            observer.next(blobResponse);
          } catch (e) {
            this.snackBar.open(e.message, 'close', { duration: 5000 });
            observer.error(e);
          }
        },
        httpError => {
          this.snackBar.open('Ha ocurrido un error al tratar de procesar la acción requerida.', 'close', { duration: 5000 });
          NetworkManager.log(httpError);
          observer.error(httpError);
        },
        () => {
          observer.complete();
        }
      );
    });
  }

  postFile(pathOperation: string, formData: FormData): Observable<BaseResponse> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    const options = { headers: headers };

    return Observable.create(observer => {
      this.httpClient.post(`${pathOperation}`, formData, options).subscribe(
        data => {
          try {
            const response: BaseResponse = <BaseResponse>data;
            if (response.State.HasError) {
              this.snackBar.open(response.State.MensajeError, 'close', { duration: 5000 });
              observer.error(response);
            } else {
              observer.next(data);
            }
          } catch (e) {
            this.snackBar.open(e.message, 'close', { duration: 5000 });
            observer.error(e);
          }
        },
        httpError => {
          this.snackBar.open('Ha ocurrido un error al tratar de procesar la acción requerida.', 'close', { duration: 5000 });
          NetworkManager.log(httpError);
          observer.error(httpError);
        },
        () => {
          observer.complete();
        });
    });
  }

  postFileBlob(pathOperation: string, formData: FormData, postParameters: PostParameters): Observable<Blob> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    return Observable.create(observer => {
      this.httpClient.post(`${pathOperation}`, formData, { headers: headers, responseType: 'blob' }).subscribe(
        data => {
          try {
            const response: Blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            observer.next(response);
          } catch (e) {
            this.snackBar.open(e.message, 'close', { duration: 5000 });
            observer.error(e);
          }
        },
        httpError => {
          this.snackBar.open('Ha ocurrido un error al tratar de procesar la acción requerida.', 'close', { duration: 5000 });
          NetworkManager.log(httpError);
          observer.error(httpError);
        },
        () => {
          observer.complete();
        });
    });
  }

}
