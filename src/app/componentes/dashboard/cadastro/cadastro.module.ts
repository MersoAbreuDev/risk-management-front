import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../shared/material/material.module';
import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaCadastroComponent } from './empresa/empresa-cadastro/empresa-cadastro.component'


@NgModule({
  declarations: [
    CadastroComponent,
    VeiculoComponent,
    VeiculoCadastroComponent,
    EmpresaComponent,
    EmpresaCadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    VeiculoComponent,
    VeiculoCadastroComponent
  ]
})
export class CadastroModule { }
