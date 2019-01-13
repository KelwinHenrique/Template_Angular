import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './core/services/auth-guard.service'
import { AuthService } from './core/services/auth.service'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
