import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { MensajeModalComponent } from './components/mensaje-modal/mensaje-modal.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    Error404PageComponent,
    MensajeModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
  ]
})
export class SharedModule { }
