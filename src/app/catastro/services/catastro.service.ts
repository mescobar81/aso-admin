import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICatastroTarjeta } from '../interfaces/catastro.interface';

const BASE_URL = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class CatastroService {

  constructor(private http: HttpClient) { }


  catastrarTarjeta(nroSocio:Number):Observable<ICatastroTarjeta>{
    let params = {
      nroSocio:nroSocio
    }
    console.log(params);
    
    return this.http.post<ICatastroTarjeta>(`${BASE_URL}/catastroTarjeta`, params)
    .pipe(
      tap((resp:ICatastroTarjeta) => of(resp))
    )
  }
}
