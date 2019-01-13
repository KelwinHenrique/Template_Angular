import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { NbToastrService } from '@nebular/theme';

import { AuthService } from '../../../../core/services/auth.service'
import { UserService } from '../../../../core/services/user.service'

import { UserSimple } from '../../../../shared/models/user/user-simple.model'
import { ResetPassword } from '../../../../shared/models/auth/reset-password.mode'
import { Error } from '../../../../shared/models/error.model'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [AuthService, UserService]
})
export class ResetPasswordComponent implements OnInit {

  private index: number = 0;
  public statusOK: boolean = false;

  public form: FormGroup = new FormGroup({
    'password': new FormControl(null, [Validators.minLength(6), Validators.required, Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/)]),
    'confirm_password': new FormControl(null, [Validators.minLength(6), Validators.required, Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/)])
  })

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastrService: NbToastrService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  private id: string
  public userSimple: UserSimple = { name: "", email:"" }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    this.userService.userSimple(this.id)
    .subscribe(
      (user: UserSimple) => {
        this.userSimple = user
       },
      (err) => {
        var error: Error
        error = new Error(err.error.errors, err.status)
        if(error.status === 404){
          this.showToast('top-right', 'danger', error.errors)
        } else{
          this.showToast('top-right', 'danger', "Erro no servidor, tente daqui alguns minutos.")
        }
       },
    );
  }

  public requestPassword(){
    console.log(this.form)
    let resetPassword: ResetPassword = this.form.value
    this.authService.resetPassword(this.id, resetPassword)
    .subscribe(
      () => {
        this.statusOK = true
       },
      (err) => {
        var error: Error
        error = new Error(err.error.errors, err.status)
        if(error.status === 400){
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
