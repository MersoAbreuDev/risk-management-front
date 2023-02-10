import { Component } from '@angular/core';
import { RouterGuard } from './guards/router.guard';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Risk Management';
  mostrarMenu: boolean = false;
  constructor(
    private routerGuard:RouterGuard,
     private router: Router ){}

    ngOnInit(){
      this.routerGuard.mostrarMenuEmitter.subscribe(
        mostrar => this.mostrarMenu = mostrar
      );
    }
}
