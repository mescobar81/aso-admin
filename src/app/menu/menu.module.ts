import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule
  ]
})
export class MenuModule { }
