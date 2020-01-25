import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Cosas } from '../clases/cosas';
import { User } from 'firebase';
import { Usuario } from '../clases/usuario';
import { AuthService } from './auth.service';




@Injectable({
  providedIn: 'root'
})
export class ArchivosFirebaseService {

  task: any;
  aux: any;
  docRefAux: any;

  public mensajeArchivo = 'No hay un archivo seleccionado';

  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  items: Array<any>;

  constructor(
    private storage: AngularFireStorage,
    private fireStore: AngularFirestore,
    private auth: AuthService
  ) { }


  //Referencia del archivo
  public uploadAndroid(nombreArchivo: string, datos: any, tipo, usuario) {
    var url: any;
    this.aux = nombreArchivo;
    var lala = this.storage.ref(tipo + '/' + usuario + '_' + this.aux).put(datos);
    lala.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      console.log("this.porcentaje" + this.porcentaje)
      if (this.porcentaje == 100) {
        this.finalizado = true;
        setTimeout(() => this.storage.ref(tipo + '/' + usuario + '_' + this.aux).getDownloadURL().subscribe((URL) => {
          console.log(URL);
          url = URL;
          console.log(url + "url")
          this.fireStore.collection(tipo).add(JSON.parse(JSON.stringify(new Cosas(usuario, this.aux, 0, url, this.auth.whoIsLogIn().uid))))
        }), 3000);
      }
    });
  }

  //Tarea para subir archivo
  public uploadWeb(event, tipo, usuario) {
    var url: any;
    this.aux = event.target.files[0].name;
    var lala = this.storage.ref(tipo + '/' + usuario + '_' + this.aux).put(event.target.files[0]);



    lala.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      console.log("this.porcentaje" + this.porcentaje)
      if (this.porcentaje == 100) {
        this.finalizado = true;

        setTimeout(() => this.storage.ref(tipo + '/' + usuario + '_' + this.aux).getDownloadURL().subscribe((URL) => {
          console.log(URL);
          url = URL;
          console.log(url + "url")
          this.fireStore.collection(tipo).add(JSON.parse(JSON.stringify(new Cosas(usuario, this.aux, 0, url, this.auth.whoIsLogIn().uid))))
        }), 3000);
      }
    });


  }

  traertodos(tipo) {
    let items: Array<any>;
    items = new Array();
    console.log('traer' + tipo);
    return this.fireStore.collection('/' + tipo).snapshotChanges();


  }


  actualizarPuntos(tipo, foto: Cosas) {

    let flag = false;
    let usuario = this.auth.whoIsLogIn().email
    foto.yaVoto.forEach(element => {
      if (element == usuario) {
        alert("solo puede votar una vez");
        navigator.vibrate;
        flag = true;
      }
    });

    if (!flag) {
      const userRef: AngularFirestoreDocument<any> = this.fireStore.doc(tipo + `/${foto.uid}`);
      foto.yaVoto.push(usuario)
      const data = {
        yaVoto: foto.yaVoto
      }
      userRef.update(data)
    }

  }
}

