import { Component, OnInit } from '@angular/core';
import { PratoComponent } from '../prato.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-cadastrarprato',
  templateUrl: './cadastrarprato.component.html',
  styleUrls: ['./cadastrarprato.component.css']
})
export class CadastrarpratoComponent implements OnInit {

  restaurante: Object[] = []
  prato: PratoComponent = new PratoComponent();
  http: Http;
  mensagem: string= "";
  router: Router;

  constructor(http: Http) {
    
    this.http = http;
   
    this.http.get('http://localhost:50173/api/Restaurante')
    .map(res => res.json())
    .subscribe(restaurante => {
        this.restaurante = restaurante;
    }, erro => console.log(erro));

   }
  cadastrar(){

    console.log(this.prato);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('NomePrato', this.prato.NomePrato);
    urlSearchParams.append('PrecoPrato', this.prato.PrecoPrato);    
    urlSearchParams.append('RestauranteID', this.prato.RestauranteID);    
    urlSearchParams.append('PrecoPrato', this.prato.PrecoPrato);
    let body = urlSearchParams.toString()
    

  this.http.post('http://localhost:50173/api/Prato', body, { headers: 
  headers})
  .subscribe(() => {
    this.prato.NomePrato = "";
    this.prato.PrecoPrato = "";
    this.prato.RestauranteID = "";
    this.mensagem = "Prato cadastrado com sucesso.";
});
  }


  ngOnInit() {
  }

}
