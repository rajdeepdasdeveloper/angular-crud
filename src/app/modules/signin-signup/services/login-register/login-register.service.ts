import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { apis } from '../../../../../environments/api';

@Injectable()
export class LoginRegisterService {

  constructor(private httpClient: HttpClient) {}

  register(registerData) {
    return this.httpClient.post<any>(environment.apiURL + apis.register, registerData).pipe(catchError(this.handleError));
  }
  login(loginData) {
    return this.httpClient.post<any>(environment.apiURL + apis.login, loginData ).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client Side Error:', errorResponse.error.message);
    }
    else{
      console.error('Server Side Error:', errorResponse.error);
    }
    return throwError('Something must be wrong with the service. We are working on it.');
  }
}

