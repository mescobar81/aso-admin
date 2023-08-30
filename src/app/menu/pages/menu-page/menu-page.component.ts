import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.usuario);
    
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
