import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {tap, Observable, of} from 'rxjs';

import { ICredencial } from '../interfaces/credencial.interfaces';
import { ILogin, Usuario } from '../interfaces/login.interfaces';

const BASE_URL = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario:ILogin= {
    parametrosGlobales:{},
    recordarSesion:false,
    usuario:{}
  };

  constructor(private http:HttpClient) { }

  get getUser():Usuario | null {

    if(!this.usuario?.usuario){
      return null;
    }
    return this.usuario.usuario;
  }
 /*  login(credencial:ICredencial):Promise<ILogin>{

    return new Promise<ILogin>((resolve, reject) => {
      this.http.post<ILogin>(`${BASE_URL}/loginPost`, credencial).subscribe((resp: ILogin) => {
        resolve(resp);
      },
        (err: any) => {
          console.log(err);
          resolve(err);
        });
    });
  } */

  login(credencial:ICredencial):Observable<ILogin>{

      return this.http.post<ILogin>(`${BASE_URL}/loginPost`, credencial).pipe(
      tap((resp:ILogin) => this.usuario = resp),
      tap((resp:ILogin) => localStorage.setItem('usuario', JSON.stringify(resp.usuario)))
    );
  }

  chequearAutenticacionUsuario():Observable<boolean> {

    const usuario:Usuario = JSON.parse(localStorage.getItem('usuario') || '');
    this.usuario!.usuario = usuario;

    if(!this.usuario.usuario){
      
      return of(false);
    }

    return of(true);
  }

  logout():void{
    localStorage.clear();
  }
}
