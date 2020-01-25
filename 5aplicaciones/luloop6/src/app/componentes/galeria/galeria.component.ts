import { Component, OnInit, ViewChild } from '@angular/core';
import { ArchivosFirebaseService } from 'src/app/service/archivos-firebase.service';
import { AuthService } from 'src/app/service/auth.service';
import { Cosas } from 'src/app/clases/cosas';
import { Shake } from '@ionic-native/shake/ngx';
import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {

  @ViewChild(IonSlides, null) slider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  nombrePagina: string; //una propiedad INPUT
  treferencia;
  itemsCopia: Array<any>;



  constructor(private firebaseStorage: ArchivosFirebaseService,
    private shake: Shake,
    private sensors: Sensors) { }

  async ngOnInit() {

    this.sensors.enableSensor(TYPE_SENSOR.ACCELEROMETER);

    this.nombrePagina = localStorage.getItem('cosas');
    this.itemsCopia = new Array();

    this.treferencia = this.firebaseStorage.traertodos(this.nombrePagina)
      .subscribe(user => {
        user.forEach(userData => {
          let data = userData.payload.doc.data() as Cosas;
          let id = userData.payload.doc.id;
          data.uid = id;
          this.itemsCopia.push(data);
        });
      });
    this.moverGaleria();
  }



  moverGaleria() {
    const watch = this.shake.startWatch(15).subscribe(() => {
      // do something
      this.sensors.getState().then(count => {
        if (Math.round(count[0]) < -5) {
          console.log(" DERECHA");
          this.slider.slideNext();
        }
        else if (Math.round(count[0]) > 3) {
          console.log("IZQUIERDA");
          this.slider.slidePrev();
        }
        else if (Math.round(count[2]) > 0 || Math.round(count[1]) > 0 ) {
          console.log("OTRO");
          this.slider.slideTo(0);
        }
      });
    });
    console.log("watch ", watch);
  }

  
}

