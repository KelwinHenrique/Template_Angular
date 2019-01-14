import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbInputModule, NbCardModule, NbMenuModule, NbContextMenuModule } from '@nebular/theme';

import { MainRoutingModule } from './main-routing.module';

import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    MainRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbCardModule,
    CommonModule,
    NbMenuModule,
    NbContextMenuModule
  ],
  providers: [NbSidebarService],
  declarations: [MainScreenComponent, MenuComponent, HeaderComponent]
})
export class MainModule { }
