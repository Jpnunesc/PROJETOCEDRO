import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {
  @Input() PratoID: string = '';
  @Input() NomePrato: string = '';
  @Input() PrecoPrato: string = '';
  @Input() RestauranteID: string = '';
  @Input() NomeRestaurante: string = '';

  constructor() { }

  ngOnInit() {
  }

}
