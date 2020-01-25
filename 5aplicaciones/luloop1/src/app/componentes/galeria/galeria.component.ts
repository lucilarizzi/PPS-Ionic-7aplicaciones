import { Component, OnInit } from '@angular/core';
import { ArchivosFirebaseService } from 'src/app/service/archivos-firebase.service';
import { AuthService } from 'src/app/service/auth.service';
import { Cosas } from 'src/app/clases/cosas';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})

@NgModule({
  declarations: [ ],
  bootstrap:    [ ],
  imports: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class GaleriaComponent implements OnInit {

  nombrePagina: string; //una propiedad INPUT
  treferencia;
  itemsCopia: Array<any>;
  spinner;
  public lottieConfig: Object;

  constructor(private firebaseStorage: ArchivosFirebaseService) {
    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
  };
   }

  async ngOnInit() {
    this.spinner = true;
    this.nombrePagina = localStorage.getItem('cosas');
    this.itemsCopia = new Array();;
    this.treferencia = this.firebaseStorage.traertodos(this.nombrePagina)
      .subscribe(user => {
        user.forEach(userData => {
          let data = userData.payload.doc.data() as Cosas;
          let id = userData.payload.doc.id;
          data.uid = id;
          this.itemsCopia.push(data);
        });
      });
    setTimeout(() => this.spinner = false, 2000)

  }

  mandarVoto(foto) {
    this.spinner = true;
    setTimeout(() => this.spinner = false, 2000);
    console.log("abajo", this.itemsCopia);
    this.firebaseStorage.actualizarPuntos(this.nombrePagina, foto);
    this.treferencia.unsubscribe();
  }






}


