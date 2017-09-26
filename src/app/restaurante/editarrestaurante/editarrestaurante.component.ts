import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers, URLSearchParams } from '@angular/http';

import { RestauranteComponent } from '../restaurante.component';

@Component({
  moduleId: module.id,
  selector: 'app-editarrestaurante',
  templateUrl: './editarrestaurante.component.html',
  styleUrls: ['./editarrestaurante.component.css']
})
export class EditarrestauranteComponent implements OnInit {

  restaurante: RestauranteComponent = new RestauranteComponent();
  http: Http;
  id: number;
  mensagem: string = '';
  
  constructor(private rota: ActivatedRoute, http: Http) { 
    this.http = http;
    this.id = rota.snapshot.params['id'];

    this.http.get('http://localhost:50173/api/Restaurante/' + this.id)
        .map(res => res.json())
        .subscribe(restaurante => {
            this.restaurante = restaurante;
        },
        erro => console.log(erro));
  }

  editar() {
    
    console.log(this.restaurante);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('RestauranteID', this.restaurante.RestauranteID);
    urlSearchParams.append('NomeRestaurante', this.restaurante.NomeRestaurante);
    let body = urlSearchParams.toString()

    this.http.put('http://localhost:50173/api/Restaurante', body, { headers: headers })
        .subscribe(() => {
            this.mensagem = 'Dados atualizados.';
            console.log('Restaurante atualizado.');
        });
      }
  ngOnInit() {
  }

}
