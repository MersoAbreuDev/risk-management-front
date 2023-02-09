import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    DashboardComponent,
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  exports:[
    
  ]
})
export class DashboardModule { }
