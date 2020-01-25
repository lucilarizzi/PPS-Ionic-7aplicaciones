import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable, of, from } from 'rxjs';
import { Flashlight } from '@ionic-native/flashlight/ngx';


@Component({
  selector: 'app-cosas-lindas',
  templateUrl: './cosas-lindas.page.html',
  styleUrls: ['./cosas-lindas.page.scss'],
})
export class CosasLindasPage implements OnInit {

  currentImage: any;
  mensaje:String;
  misImagenes: Observable<any>;
  misImagenes2: Array<any>;
  mostrarChat: Boolean;
  estadoluz: boolean;
 /*  camera: any; */

  constructor(private camera: Camera,  private flashlight: Flashlight ) { }

  ngOnInit() {
  }

  image:any='';

  luz()
  {
    if (this.estadoluz) {
      this.flashlight.switchOff()
      this.estadoluz= false;
    } else {
      this.flashlight.switchOn()
      this.estadoluz= true;
    }
  }

  camara(){
        const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
     this.camera.getPicture(options).then((imageData) => {
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     alert("error "+JSON.stringify(err))
    });

  }

  enviar() {



  



  }


  traer() {
  

  }

}
