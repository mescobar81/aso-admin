import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  accion:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: '627431695847785', accion: 'eliminar'}
];

@Component({
  selector: 'app-view-tarjeta',
  templateUrl: './view-tarjeta.component.html',
  styleUrls: ['./view-tarjeta.component.css']
})
export class ViewTarjetaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'accion'];

  
  dataSource = [...ELEMENT_DATA];
  addData(){}
  removeData(){}
  constructor(private route:Router) { }

  ngOnInit(): void {

  }

  agregarTarjeta(){
    this.route.navigateByUrl('/menu/agregar-tarjeta');
  }
}
