import { Component, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { PratoComponent } from '../prato.component';

@Component({
  moduleId: module.id,
  selector: 'app-editarprato',
  templateUrl: './editarprato.component.html',
  styleUrls: ['./editarprato.component.css']
})
export class EditarpratoComponent implements OnInit {
  restaurante: Object[] = []
  prato: PratoComponent = new PratoComponent();
  http: Http;
  id: number;
  mensagem: string = '';

  constructor(private rota: ActivatedRoute, http: Http) { 
    this.http = http;
    this.id = rota.snapshot.params['id'];

    this.http.get('http://localhost:50173/api/Prato/' + this.id)
        .map(res => res.json())
        .subscribe(prato => {
            this.prato = prato;
        },
        erro => console.log(erro));

    this.http.get('http://localhost:50173/api/Restaurante')
        .map(res => res.json())
        .subscribe(restaurante => {
            this.restaurante = restaurante;
            console.log(this.restaurante);
        }, erro => console.log(erro));
  }
  editar() {
    console.log(this.prato);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('PratoID', this.prato.PratoID);
    urlSearchParams.append('NomePrato', this.prato.NomePrato);
    urlSearchParams.append('PrecoPrato', this.prato.PrecoPrato);
    urlSearchParams.append('RestauranteID', this.prato.RestauranteID);
    let body = urlSearchParams.toString()

    this.http.put('http://localhost:50173/api/Prato', body, { headers: headers })
        .subscribe(() => {
            this.mensagem = 'Prato atualizado.';
            console.log('Prato atualizado');
        });
      }
  ngOnInit() {
  }

}
