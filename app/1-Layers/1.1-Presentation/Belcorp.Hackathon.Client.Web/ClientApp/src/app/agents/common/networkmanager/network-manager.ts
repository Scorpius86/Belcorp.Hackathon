
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostParameters } from './post-parameters';
import { Observable } from 'rxjs';
import { BaseResponse } from '../../core/base-response';
import { GetTokenResponse } from '../../authentication/response/get-token.response';
import { AppConstants } from '../../../shared/app.constants';
import { MatSnackBar } from '@angular/material';

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

  getTokenPost(postParameters: PostParameters): Observable<BaseResponse> {
    const headers = new HttpHeaders({ 'content-type': 'application/x-www-form-urlencoded' });
    const options = { headers: headers };

    const parameters = postParameters.RequestParameter || null;

    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('client_id', 'resourceownerclient');
    body.set('client_secret', 'dataEventRecordsSecret');
    body.set('scope', 'apiMaintenance apiProduct apiHome apiImage apiSecurity apiSap apiSurvey apiMessage apiStage apiSetting apiCoding apiProductImage apiExtrapolation');
    body.set('username', parameters.userName);
    body.set('password', parameters.password);

    return Observable.create(observer => {
      this.httpClient.post(`${postParameters.PathOperation}`, body.toString(), options).subscribe(
        (data: GetTokenResponse) => {
          try {
            const response: BaseResponse = <BaseResponse>data;
            if (data.access_token) {
              observer.next(response);
            } else {
              observer.error('Error inesperado al intentar obtener el token de seguridad.');
            }
          } catch (e) {
            observer.error(e);
          }
        }, httpError => {
          let errorMessage = '';
          if (httpError.status === 400 && httpError.error.error_description === AppConstants.IdentityValidation.INVALID_USERNAME_OR_PASSWORD) {
            errorMessage = AppConstants.Messages.USUARIO_PASSWORD_INCORRECTOS;

          } else if (httpError.status === 400 && httpError.error.error === AppConstants.IdentityValidation.INVALID_CLIENT) {
            errorMessage = AppConstants.Messages.CONFIGURACION_INCORRECTA_IDENTITY_SERVER;

          } else {
            NetworkManager.log(httpError);
            errorMessage = AppConstants.Messages.NO_POSIBLE_VERIFICAR_CREDENCIALES_CONTACTE_ADMINISTRADOR_SISTEMAS;
          }
          this.snackBar.open(errorMessage, 'close', { duration: 5000 });
          observer.error(errorMessage);
        },
        () => {
          observer.complete();
        });
    });
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
