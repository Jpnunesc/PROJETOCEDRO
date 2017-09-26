import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';


import { PratoComponent } from '../prato.component';

@Component({
  moduleId: module.id,
  selector: 'app-listarprato',
  templateUrl: './listarprato.component.html',
  styleUrls: ['./listarprato.component.css']
})
export class ListarpratoComponent implements OnInit {


  pratos: Object[] = []
  http: Http;
  mensagem: string = ''; 

  constructor(http: Http) {
        this.http = http;

     this.http.get('http://localhost:50173/api/Prato')
            .map(res => res.json())
            .subscribe(pratos => {
                this.pratos = pratos;
            }, erro => console.log(erro));
          }
          
 excluir(prato: PratoComponent = new PratoComponent()) {

    this.http.delete('http://localhost:50173/api/Prato/' + prato.PratoID)
      .subscribe(() => {
        let indiceDoPrato = this.pratos.indexOf(prato);

        if (indiceDoPrato > -1) {
            this.mensagem = 'Excluido com sucesso!';
            console.log('Prato removido');
            this.pratos.slice(indiceDoPrato, 1);
            this.atualizarLista();
        }
    }, erro => {
         console.log(erro);
         this.mensagem = 'Não foi possível excluir!';
    });
 }

 atualizarLista() {
    this.http.get('http://localhost:50173/api/Prato/')
       .map(res => res.json())
       .subscribe(pratos => {
         this.pratos = pratos;
       }, erro => console.log(erro));
    }

ngOnInit() {
  }

}
