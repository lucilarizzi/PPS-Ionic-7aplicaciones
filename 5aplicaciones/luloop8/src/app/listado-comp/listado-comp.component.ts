import { Component, OnInit, Input } from '@angular/core';
import { ResultMetegol } from '../clases/result-metegol';

@Component({
  selector: 'app-listado-comp',
  templateUrl: './listado-comp.component.html',
  styleUrls: ['./listado-comp.component.scss'],
})
export class ListadoCompComponent implements OnInit {

  @Input()resultados: Array<ResultMetegol> = Array<ResultMetegol>();

  constructor() { }

  ngOnInit() {

    
  }
  

}
