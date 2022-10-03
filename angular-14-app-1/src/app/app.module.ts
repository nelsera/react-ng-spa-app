import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecargaFormComponent } from './recargas/recarga-form/recarga-form.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AcessoAContaComponent } from './acesso-a-conta/acesso-a-conta.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RecargaFormComponent,
    InicioComponent,
    LoginComponent,
    AcessoAContaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular-14-app-1' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
