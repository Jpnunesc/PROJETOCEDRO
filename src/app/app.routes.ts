import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';

import { RestauranteComponent } from './restaurante/restaurante.component'; 
import { CadastrarrestauranteComponent } from './restaurante/cadastrarrestaurante/cadastrarrestaurante.component';
import { ListarrestauranteComponent } from './restaurante/listarrestaurante/listarrestaurante.component';
import { EditarrestauranteComponent } from './restaurante/editarrestaurante/editarrestaurante.component';


import { PratoComponent } from './prato/prato.component';
import { EditarpratoComponent } from './prato/editarprato/editarprato.component';
import { CadastrarpratoComponent } from './prato/cadastrarprato/cadastrarprato.component';
import { ListarpratoComponent } from './prato/listarprato/listarprato.component';




const appRoutes: Routes = [
    { path: '', component: InicialComponent },
    
    { path: 'restaurante', component: RestauranteComponent },
    { path: 'restaurante/editarrestaurante/:id', component: EditarrestauranteComponent },
    { path: 'restaurante/cadastrarrestaurante', component: CadastrarrestauranteComponent },
    { path: 'restaurante/listarrestaurante', component: ListarrestauranteComponent },     
    
    { path: 'prato', component: PratoComponent },
    { path: 'prato/editarprato/:id', component: EditarpratoComponent },
    { path: 'prato/cadastrarprato', component: CadastrarpratoComponent },
    { path: 'prato/listarprato', component: ListarpratoComponent },

    { path: '**', component: InicialComponent }
];

export const routing = RouterModule.forRoot(appRoutes);