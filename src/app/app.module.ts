import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './componentes/menu/menu.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
   
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right'
    })
 
  ],
  exports:[
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
