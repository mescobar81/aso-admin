import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router:Router,
    private authService: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.authService.chequearAutenticacionUsuario()
      .pipe(
        tap(valido => console.log(valido)),
        tap(valido =>{
          if(!valido){
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
      return this.authService.chequearAutenticacionUsuario()
      .pipe(
        tap(valido => console.log(valido)),
        tap(valido =>{
          if(!valido){
            this.router.navigateByUrl('/auth/login');
          }
        })
      );
  }
}
