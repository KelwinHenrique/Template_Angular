import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componnets Nebular
 */
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';


import { MainScreenComponent } from './components/main-screen/main-screen.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: MainScreenComponent}
      ]
    ),
    NbLayoutModule,
    NbSidebarModule,
    CommonModule
  ],
  providers: [NbSidebarService],
  declarations: [MainScreenComponent],
  exports: [MainScreenComponent]
})
export class MainModule { }
