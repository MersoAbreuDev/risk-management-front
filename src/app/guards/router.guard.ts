import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private localStorageService: LocalStorageService,
    private routerNav: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.localStorageService.getLocalStorage('token') !== 'object'){
    this.mostrarMenuEmitter.emit(true);
    return true;
   }
   this.mostrarMenuEmitter.emit(false);
   this.routerNav.navigate(['']);
   return false;
  }
  
}
