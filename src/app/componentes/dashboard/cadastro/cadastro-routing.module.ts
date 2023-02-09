import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
