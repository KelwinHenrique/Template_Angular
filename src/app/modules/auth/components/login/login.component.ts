import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NbToastrService } from '@nebular/theme';

import { AuthService } from '../../../../core/services/auth.service'
import { Login } from '../../../../shared/models/auth/login.model'
import { ResponseLogin } from '../../../../shared/models/auth/responseLogin.model'
import { Error } from '../../../../shared/models/error.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  private index: number = 0;

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password': new FormControl(null, [Validators.minLength(5), Validators.required])
  })

  constructor(private auth: AuthService, private toastrService: NbToastrService, private router: Router) { }

  ngOnInit() {
  }

  public login(): void {
    let login: Login = this.form.value
    this.auth.login(login)
    .subscribe(
      (responseLogin: ResponseLogin) => {
        this.router.navigate(['home']);
        return responseLogin
       },
      (err) => {
        var error: Error
        error = new Error(err.error.errors, err.status)
        if(error.status === 404){
          this.showToast('top-right', 'danger', error.errors)
        } else{
          this.showToast('top-right', 'danger', "Erro no servidor, tente daqui alguns minutos.")
        }

        return error
       },
    );
  }

  showToast(position, status, body) {
    this.index += 1;
    this.toastrService.show(
      body,
      "Erro",
      { position, status });
  }



}
