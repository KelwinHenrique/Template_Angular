import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbInputModule, NbCardModule, NbButtonModule, NbCheckboxModule } from '@nebular/theme';

import { LoginComponent } from './components/login/login.component';

import { AuthRoutingModule } from './auth-routing.module';

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
    NbCheckboxModule
  ],
  providers: [NbSidebarService],
  declarations: [LoginComponent]
})
export class AuthModule { }
