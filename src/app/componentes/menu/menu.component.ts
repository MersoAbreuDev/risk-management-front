import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService){}
  
  
  navigateHome(){
    this.router.navigate(['/dashboard']);
  }
  navigateveiculos(){
    this.router.navigate(['cadastro/veiculos']);
  }
  navigateEmpresa(){
    this.router.navigate(['cadastro/empresas']);
  }

  logout(){
    this.localStorageService.removeLocalStorage('token')
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
 
    this.router.navigate(['']);
    this.load();
  }

  load() {
    (localStorage['refresh'] == 'true' || !localStorage['refresh']) && location.reload();
    localStorage['refresh'] = true;
  }
 
}
