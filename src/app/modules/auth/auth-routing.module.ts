import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'request-password', component: RequestPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
