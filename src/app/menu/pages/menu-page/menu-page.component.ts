import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/auth/interfaces/login.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  menuItems = [
    {
      label:'Catastrar',
      subLabel:[
        {
          name: 'Agregar Tarjeta',
          url:'/menu/view-tarjeta',
          icon:'add_box'
        }
      ]
    },
    {
      label:'Pagar Tarjeta',
      url:'',
      icon:''
    }
  ];

  get usuario(){
    return this.authService.getUser;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.usuario);
    
  }

}
