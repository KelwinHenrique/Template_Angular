import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../../shared/models/auth/login.model'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(login: Login): Observable<any> {
    return this.http.post<any>('http://localhost:3008/oapi/user/login', login)
  }


}
