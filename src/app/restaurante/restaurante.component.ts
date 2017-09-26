import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})

export class RestauranteComponent implements OnInit {
  @Input() RestauranteID: string = '';
  @Input() NomeRestaurante: string = '';
 
  constructor() { }

  ngOnInit() {
  }

}
