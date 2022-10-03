import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoAContaComponent } from './acesso-a-conta/acesso-a-conta.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RecargaFormComponent } from './recargas/recarga-form/recarga-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'acesso-a-conta', component: AcessoAContaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'recargas', component: RecargaFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
