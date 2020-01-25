import { Component, OnInit, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { ArchivosFirebaseService } from 'src/app/service/archivos-firebase.service';
import { File } from '@ionic-native/file/ngx';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';


@NgModule({
  declarations: [ ],
  bootstrap:    [ ],
  imports: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

@Component({
  selector: 'app-cosas-lindas',
  templateUrl: './cosas-lindas.page.html',
  styleUrls: ['./cosas-lindas.page.scss'],
})
export class CosasLindasPage implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  opcionElegida: number;
  estadoluz: boolean;
  nombrePagina: string; //una propiedad INPUT

  image: any = '';
  selectedFiles: any;
  fileName: string;
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  lindo: boolean;
  listaDeArchivos = [];
  items: Array<any>;

  galeria: boolean;
  botonera: boolean;
  stats: boolean;
  preview: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private file: File,
    private camera: Camera,
    private flashlight: Flashlight,
    private firebaseStorage: ArchivosFirebaseService,
    private servAuth: AuthService) { }

  async ngOnInit() {

    this.galeria = false;
    this.stats = false;
    this.botonera = true;
    this.preview = false;

    this.nombrePagina = localStorage.getItem('cosas');
    if (this.nombrePagina == "cosasLindas") {
      this.lindo = true;
    }
    else {
      this.lindo = false;
    }

  }

  mostrarGaleria() {
    if (!this.galeria) {

      this.stats = false;
      this.botonera = false;
      this.preview = false;
      this.galeria = true;
    }
    else {
      this.stats = false;
      this.botonera = true;
      this.preview = true;
      this.galeria = false;
    }
  }


  luz() {
    this.stats = true;
    this.botonera = false;
    this.preview = false;
    this.galeria = false;
  }


  async camara() {
    this.opcionElegida = 1;
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    try {
      let cameraInfo = await this.camera.getPicture(options)

      this.image = (<any>window).Ionic.WebView.convertFileSrc(cameraInfo);

      console.log('cameraInfo' + cameraInfo);
      let blobInfo = await this.makeFileIntoBlob(cameraInfo);
      this.selectedFiles = blobInfo;


      this.stats = false;
      this.botonera = false;
      this.preview = true;
      this.galeria = false;


    } catch (e) {
      console.log(e.message);
      alert("File Upload Error " + e.message);
      this.stats = false;
      this.botonera = true;
      this.preview = false;
      this.galeria = false;
    }
  }




  // FILE STUFF
  makeFileIntoBlob(_imagePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = "";
      console.log(_imagePath);
      
      this.file.resolveLocalFilesystemUrl(_imagePath)
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

  //********************************************************************** */**
  //Sube fotos a Cloud Storage
  async cargarImagen() {
    switch (this.opcionElegida) {
      case 1:
        let archivo = this.selectedFiles;
        console.info(this.selectedFiles)
        this.firebaseStorage.uploadAndroid(archivo.fileName, archivo.imgBlob, this.nombrePagina, this.servAuth.whoIsLogIn().email);
        this.selectedFiles = false;
        this.stats = false;
        this.botonera = true;
        this.preview = false;
        this.galeria = false;
        break;
      case 2:
        this.firebaseStorage.uploadWeb(this.selectedFiles, this.nombrePagina, this.servAuth.whoIsLogIn().email);
        this.selectedFiles = false;
        this.stats = false;
        this.botonera = true;
        this.preview = false;
        this.galeria = false;
        break;
      default:
        alert("carga cancelada");
        break
    }

  }

  cancelar() {
    this.opcionElegida = 0;
    this.selectedFiles = false;
    this.stats = false;
    this.botonera = true;
    this.preview = false;
    this.galeria = false;
  }



  /************************************************************
   * para web detecta archivos ylos subre
   * 
   * @param event 
   */
  detectFiles(event) {

    console.log(event.target.files[0]);

    console.log("this.file.tempDirectory" + this.file.tempDirectory);
    console.log("this.file.tempDirectory" + this.file.syncedDataDirectory);
    console.log("this.file.tempDirectory" + this.file.sharedDirectory);


    this.opcionElegida = 2;
    this.selectedFiles = event;
    this.fileName = event.target.files[0].name;

    console.log("window.WEBVIEW_SERVER_URL" + (<any>window).Ionic.WEBVIEW_SERVER_URL);

    console.log('selectedFiles: ' + this.fileName);
    console.info('event ', event.target.files[0]);

    console.log(this.image);

    try {

      this.image = "file:///storage/emulated/0/Pictures/Screenshots/" + this.fileName;
      2
    } catch (e) {
      this.image = "file:///storage/emulated/0/Dowload/" + this.fileName;
    }


    this.stats = false;
    this.botonera = false;
    this.galeria = false;
    this.preview = true;

  }

  fileExists(fileEntry) {
    alert("File " + fileEntry.fullPath + " exists!");
  }
  fileDoesNotExist() {
    alert("file does not exist");
  }
  getFSFail(evt) {
    console.log(evt.target.error.code);
  }

  salir() {
    this.servAuth.signOut()
    this.router.navigateByUrl('/home');
  }



}
