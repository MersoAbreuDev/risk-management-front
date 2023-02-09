import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaCadastroComponent } from './empresa/empresa-cadastro/empresa-cadastro.component';

const routes: Routes = [
  {
    path:'',
    component:CadastroComponent
  },
  {
    path:'veiculos',
    component:VeiculoComponent
  },
  {
    path:'veiculo-cadastro',
    component:VeiculoCadastroComponent
  },
  {
    path:'empresas',
    component:EmpresaComponent
  },
  {
    path:'empresa-cadastro',
    component:EmpresaCadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
