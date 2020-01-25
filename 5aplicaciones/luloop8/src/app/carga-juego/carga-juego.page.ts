import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../service/auth.service';
import { MetegolService } from '../service/metegol.service';
import { Metegol } from '../clases/metegol';
import { ResultMetegol } from '../clases/result-metegol';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-carga-juego',
  templateUrl: './carga-juego.page.html',
  styleUrls: ['./carga-juego.page.scss'],
})
export class CargaJuegoPage implements OnInit {


  jugador1;
  jugador2;
  juegoActual: Metegol;
  juegoUID;
  jugadaActual: ResultMetegol;
  resultadoFinal;

  /////////////////


  image: any = '';
  selectedFiles: any;
  fileName: string;
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;




  constructor(private camera: Camera,
    private router: Router,
    private file: File,
    private storage: AngularFireStorage, private toastCtrl: ToastController,
    private nativeAudio: NativeAudio,
    private auth: AuthService,
    private meteService: MetegolService,
    public loadingController: LoadingController

  ) {
    this.jugador1 = localStorage.getItem("jugador1");
    this.jugador2 = localStorage.getItem("jugador2");
    this.juegoUID = localStorage.getItem("uid");
    this.nativeAudio.preloadSimple('splash', "assets/sonidos/145.mp3");

  }

  ngOnInit() {

    this.nativeAudio.play('splash');
    this.resultadoFinal = false;
    this.meteService.traerUno(this.juegoUID).subscribe((e) => {
      this.juegoActual = e as Metegol;
      console.log("this.juegoActual", this.juegoActual);
      console.log("uid", this.juegoUID);
      this.selectedFiles = null;
      this.jugadaActual = new ResultMetegol(false, false);
    });
  }

  gano(quien) {

    switch (quien) {
      case 1:
        console.log("gano 1");
        this.jugadaActual.result1 = 1;
        this.jugadaActual.result2 = 0;
        break;

      case 2:
        console.log("gano 2");
        this.jugadaActual.result1 = 0;
        this.jugadaActual.result2 = 1;
        break;

      case 3:
        this.resultadoFinal = true;
        break;

    }


    if (this.selectedFiles != null) {
      this.selectedFiles = false;
    }
    else {
      this.jugadaActual.url = '../assets/love.jpg';
    }

    this.meteService.agregarJugada(this.juegoActual, this.jugadaActual, this.juegoUID);

  }

  //////////////////////////
  async camara() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    try {
      let cameraInfo = await this.camera.getPicture(options);
      this.image = (<any>window).Ionic.WebView.convertFileSrc(cameraInfo);
      console.log('cameraInfo' + cameraInfo);
      let blobInfo = await this.makeFileIntoBlob(cameraInfo);
      this.selectedFiles = blobInfo;
      this.cargarImagen();
    } catch (e) {
      console.log(e.message);
      alert("File Upload Error " + e.message);
    }
  }



  // FILE STUFF
  makeFileIntoBlob(_imagePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = "";
      this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          let { name, nativeURL } = fileEntry;

          // get the path..
          let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
          console.log("path", path);
          console.log("fileName", name);

          fileName = name;
          // we are provided the name, so now read the file into
          // a buffer
          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          let imgBlob = new Blob([buffer], {
            type: "image/jpeg",
          });
          console.log("imgBlob.type, imgBlob.size");

          console.log(imgBlob.type, imgBlob.size);
          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
    });
  }



  async cargarImagen() {
    let archivo = this.selectedFiles;
    console.info(this.selectedFiles);
    this.uploadAndroid(archivo.fileName, archivo.imgBlob, this.auth.whoIsLogIn().email);

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();
  }



  async uploadAndroid(nombreArchivo: string, datos: any, usuario) {

    const loading = await this.loadingController.create({
      message: 'Cargando Imagen',
      duration: 4000
    });

    var url: any;
    let aux = nombreArchivo;
    var lala = this.storage.ref("metegol" + '/' + usuario + '_' + aux).put(datos);

    loading.present();
    lala.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      loading.message = 'Cargando Imagen: \n' + this.porcentaje.toString();

    

      if (this.porcentaje == 100) {
        this.finalizado = true;
        setTimeout(() => this.storage.ref("metegol" + '/' + usuario + '_' + aux).getDownloadURL().subscribe((URL) => {
          console.log(URL);
          url = URL;
          console.log(url + "url");
          loading.onDidDismiss();
          this.jugadaActual.url = url;
        }), 3000);
      }
    });
  }







  /*   salir() {
      this.servAuth.signOut()
      this.router.navigateByUrl('/home');
    } */

}
