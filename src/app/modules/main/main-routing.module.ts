import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../core/services/auth-guard.service'

import { MainScreenComponent } from './components/main-screen/main-screen.component';


const routes: Routes = [
  {path: '', component: MainScreenComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
