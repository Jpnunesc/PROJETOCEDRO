import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing}from'./app.routes';
import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';

import { RestauranteComponent } from './restaurante/restaurante.component';
 import { EditarrestauranteComponent } from './restaurante/editarrestaurante/editarrestaurante.component';
 import { CadastrarrestauranteComponent } from './restaurante/cadastrarrestaurante/cadastrarrestaurante.component';
 import { ListarrestauranteComponent } from './restaurante/listarrestaurante/listarrestaurante.component';
 import { FiltroRestaurante } from './restaurante/listarrestaurante/restaurante.lista.pipes';
 

import { PratoComponent } from './prato/prato.component';
 import { ListarpratoComponent } from './prato/listarprato/listarprato.component';
 import { CadastrarpratoComponent } from './prato/cadastrarprato/cadastrarprato.component';
 import { EditarpratoComponent } from './prato/editarprato/editarprato.component';
 import { FiltroPrato } from './prato/listarprato/prato.lista.pipe';
 

import { InicialComponent } from './inicial/inicial.component';


@NgModule({
  
  declarations: [
    AppComponent,
    RestauranteComponent,
    PratoComponent,
    InicialComponent,
    EditarrestauranteComponent,
    CadastrarrestauranteComponent,
    ListarrestauranteComponent,
    FiltroRestaurante,
    ListarpratoComponent,
    CadastrarpratoComponent,
    EditarpratoComponent,
    FiltroPrato
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
