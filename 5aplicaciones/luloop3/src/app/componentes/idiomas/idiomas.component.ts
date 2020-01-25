import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
})
export class IdiomasComponent implements OnInit {

  @Output() editarB: EventEmitter<any> = new EventEmitter<any>();



  constructor() { }

  ngOnInit() { }

  idioma(elegido: string) {
    this.editarB.emit(elegido)
  }


}
