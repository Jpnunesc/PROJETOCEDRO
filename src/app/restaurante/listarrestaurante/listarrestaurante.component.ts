import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';


import { RestauranteComponent } from '../restaurante.component';



@Component({
  moduleId: module.id,
  selector: 'app-listarrestaurante',
  templateUrl: './listarrestaurante.component.html',
  styleUrls: ['./listarrestaurante.component.css']
})

export class ListarrestauranteComponent implements OnInit {
  restaurante: Object[] = []
  http: Http;
  mensagem: string = '';

  constructor(http: Http) { 
    this.http = http;
    
            this.http.get('http://localhost:50173/api/Restaurante')
            .map(res => res.json())
                .subscribe(restaurante => {
                    this.restaurante = restaurante;
                    console.log(this.restaurante);
                }, erro => console.log(erro));
  }
  excluir(restaurante: RestauranteComponent = new RestauranteComponent()) {

        console.log('restaurante: ' + restaurante.RestauranteID);
            this.http.delete('http://localhost:50173/api/Restaurante/' + restaurante.RestauranteID)
                .subscribe(() => {
                    let indiceDoRestaurante = this.restaurante.indexOf(restaurante);
    
                    if (indiceDoRestaurante > -1) {
                        this.mensagem = 'Restaurante excluido';
                        this.restaurante.slice(indiceDoRestaurante,1);
                        this.atualizarLista();
                    }
                }, erro => {
                    console.log(erro);
                    this.mensagem = 'Error ao excluir';
                });
        }
    
        atualizarLista() {
            this.http.get('http://localhost:50173/api/Restaurante')
                .map(res => res.json())
                .subscribe(restaurante => {
                    this.restaurante = restaurante;
                }, erro => console.log(erro));
        }

  ngOnInit() {
  }

}
