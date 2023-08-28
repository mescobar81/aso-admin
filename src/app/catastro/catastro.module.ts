import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatastroRoutingModule } from './catastro-routing.module';
import { CatastroPageComponent } from './pages/catastro-page/catastro-page.component';
import { AgregarTarjetaComponent } from './pages/agregar-tarjeta/agregar-tarjeta.component';
import { MaterialModule } from '../material/material.module';
import { ViewTarjetaComponent } from './pages/view-tarjeta/view-tarjeta.component';


@NgModule({
  declarations: [
    CatastroPageComponent,
    AgregarTarjetaComponent,
    ViewTarjetaComponent
  ],
  imports: [
    CommonModule,
    CatastroRoutingModule,
    MaterialModule
  ]
})
export class CatastroModule { }
