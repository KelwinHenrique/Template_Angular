import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MainModule } from '../app/modules/main/main.module';
import { AuthModule } from '../app/modules/auth/auth.module';

import { LoginComponent } from '../app/modules/auth/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: "login", component: LoginComponent},
        { path: "main", component: AppComponent},
      ]
    ),
    MainModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
