import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from '../app.routes';

import { InicialComponent } from '../inicial/inicial.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [InicialComponent],
    bootstrap: [InicialComponent]
})
export class InicialModule { }