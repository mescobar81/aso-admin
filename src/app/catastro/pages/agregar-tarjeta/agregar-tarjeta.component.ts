import { Component, OnInit } from '@angular/core';

declare var Bancard:any;

export interface PeriodicElement {
  name: string;
  accion:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: '627431695847785', accion: 'eliminar'}
];

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'accion'];

  
  dataSource = [...ELEMENT_DATA];
    addData(){}
    removeData(){}
  constructor() { }

  ngAfterViewInit(): void {
    var styles = {
      'input-background-color' : '#453454',
      'input-text-color': '#B22222',
      'input-border-color' : '#CCCCCC',
      'input-placeholder-color' : '#999999',
      'button-background-color' : '#5CB85C',
      'button-text-color' : '#FFFFFF',
      'button-border-color' : '#4CAE4C',
      'form-background-color' : '#999999',
      'form-border-color' : '#DDDDDD',
      'header-background-color' : '#F5F5F5',
      'header-text-color' : '#333333',
      'hr-border-color' : '#B22222'
    };

    const opctions = {
      styles: styles
    }
    console.log('proccessid');
    Bancard.Cards.createForm('iframe-container', 'V3aeqBmb7.70L76Q_*DK',
      opctions.styles);
  }

  ngOnInit(): void {
  }
}
