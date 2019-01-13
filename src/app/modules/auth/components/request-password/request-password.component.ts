import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NbToastrService } from '@nebular/theme';

import { AuthService } from '../../../../core/services/auth.service'
import { ResponseOK } from '../../../../shared/models/responseOK.model'
import { Error } from '../../../../shared/models/error.model'

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.css'],
  providers: [AuthService]
})
export class RequestPasswordComponent implements OnInit {

  private index: number = 0;
  public emailSend: boolean = false;

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.email, Validators.required])
  })

  constructor(private auth: AuthService, private toastrService: NbToastrService, private router: Router) { }

  ngOnInit() {
  }

  public requestPassword(){
    this.auth.requestPassword(this.form.value)
    .subscribe(
      (responseOK: ResponseOK) => {
        this.emailSend = true
       },
      (err) => {
        var error: Error
        error = new Error(err.error.errors, err.status)
        if(error.status === 401){
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

  public goLogin(){
    this.router.navigate(['auth/login']);
  }

}
