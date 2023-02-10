import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterGuard } from './guards/router.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'',
    loadChildren:()=>import('./componentes/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./componentes/dashboard/dashboard.module').then((m)=> m.DashboardModule),
    canActivate:[RouterGuard]
  
  },
  {
    path:'cadastro',
    loadChildren:()=>import('./componentes/dashboard/cadastro/cadastro.module').then((m)=> m.CadastroModule),
    canActivate:[RouterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
