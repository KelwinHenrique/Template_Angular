import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: '../app/modules/main/main.module#MainModule'},
  {path: 'auth', loadChildren: '../app/modules/auth/auth.module#AuthModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
