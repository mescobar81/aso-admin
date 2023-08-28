import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

import { ICredencial } from '../../interfaces/credencial.interfaces';
import { AuthService } from '../../services/auth.service';
import { ILogin } from '../../interfaces/login.interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  hide: boolean = true;
  myForm: UntypedFormGroup = this.fb.group({
    documento: ['', [Validators.required]],
    clave: ['', [Validators.required]],
  });
  constructor(private router: Router,
    private fb: UntypedFormBuilder,
    private authService: AuthService) { }

  isValidCampos(campo: string): boolean | null {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  }

  getErrorsMensaje(campo: string): string | null {
    if (!this.myForm.controls[campo].errors) {
      return null;
    }
    const errors = this.myForm.controls[campo].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Campo es requerido'
        default:
          return 'Campo inválido'
      }
    }
    return '';
  }

  async login() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    let { documento, clave } = this.myForm.value
    clave = CryptoJS.SHA256(clave).toString(CryptoJS.enc.Hex);
    const credencial: ICredencial = {
      documento: documento,
      clave: clave,
      device: {
        os: '',
        ip: '',
        model: '',
        version: ''
      }
    };

    this.authService.login(credencial).subscribe((resp:ILogin) => {
      
      if(resp.usuario.valido){
        this.router.navigateByUrl('/menu');
      }else{
        Swal.fire({
          icon:'error',
          title: 'Aso Tigo',
          text: resp.usuario.mensaje
        })
      }
    }, err => {
      console.log(err);
      Swal.fire({
        icon:'error',
        title: 'Aso Tigo',
        text: err
      })
    });
  }

  logout(){
    this.authService.logout();
    //this.router.navigateByUrl('/auth/login');
  }
}
