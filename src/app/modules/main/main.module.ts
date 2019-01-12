import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbInputModule, NbCardModule } from '@nebular/theme';

import { MainRoutingModule } from './main-routing.module';

import { MainScreenComponent } from './components/main-screen/main-screen.component';

@NgModule({
  imports: [
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbCardModule,
    CommonModule
  ],
  providers: [NbSidebarService],
  declarations: [MainScreenComponent]
})
export class MainModule { }
