import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbInputModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbToastrModule } from '@nebular/theme';

import { LoginComponent } from './components/login/login.component';

import { AuthRoutingModule } from './auth-routing.module';
import { RequestPasswordComponent } from './components/request-password/request-password.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbCardModule,
    CommonModule,
    NbButtonModule,
    NbCheckboxModule,
    NbToastrModule.forRoot(),
  ],
  providers: [NbSidebarService],
  declarations: [LoginComponent, RequestPasswordComponent]
})
export class AuthModule { }
