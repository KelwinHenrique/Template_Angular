import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../../shared/models/auth/login.model'
import { ResetPassword } from '../../shared/models/auth/reset-password.mode'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(login: Login): Observable<any> {
    return this.http.post<any>('http://localhost:3008/oapi/user/login', login)
  }

  public requestPassword(email: string): Observable<any> {
    return this.http.post<any>('http://localhost:3008/oapi/user/forgotPassword', email)
  }

  public resetPassword(id: string, resetPassword: ResetPassword): Observable<any> {
    return this.http.post<any>(`http://localhost:3008/oapi/user/changePassword/${id}`, resetPassword)
  }

  public validateToken(idToken: string): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:3008/oapi/validateToken', { token: idToken })
  }
}
