import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../../../core/services/auth.service'
import { Login } from '../../../../shared/models/auth/login.model'
import { ResponseLogin } from '../../../../shared/models/auth/responseLogin.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {


  public form: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password': new FormControl(null, [Validators.minLength(5), Validators.required])
  })

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public login(): void {
    let login: Login = this.form.value
    this.auth.login(login)
    .subscribe(
      (responseLogin: ResponseLogin) => {
        console.log(responseLogin)
        return responseLogin
       },
      (err) => {
        let error: Error = err.error
        console.log(error)
        return error
       },
    );
  }

}
