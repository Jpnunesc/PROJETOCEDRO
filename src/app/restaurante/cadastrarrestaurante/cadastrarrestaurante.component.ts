import { Component, OnInit } from '@angular/core';
import { RestauranteComponent} from '../restaurante.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-cadastrarrestaurante',
  templateUrl: './cadastrarrestaurante.component.html',
  styleUrls: ['./cadastrarrestaurante.component.css']
})
export class CadastrarrestauranteComponent implements OnInit {

  restaurante: RestauranteComponent = new RestauranteComponent();
  http: Http;
  mensagem: string = "";
  
  constructor(http: Http) { 
    this.http = http;
  }
  cadastrar() {
    console.log(this.restaurante);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('NomeRestaurante', this.restaurante.NomeRestaurante);
    let body = urlSearchParams.toString()
    console.log(body);

    this.http.post('http://localhost:50173/api/Restaurante/', body, { headers: headers })
        .subscribe(() => {
            this.restaurante.NomeRestaurante = "";
            this.mensagem = "Restaurante cadastrado com sucesso.";
        });
}
  ngOnInit() {

  }

}
