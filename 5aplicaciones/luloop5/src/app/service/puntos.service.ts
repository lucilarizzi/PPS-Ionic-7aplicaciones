import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Cosas } from '../clases/cosas';
import { AuthService } from './auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PuntosService {

  constructor(private storage: AngularFireStorage,
    private fireStore: AngularFirestore,
    public auth: AuthService,
    private toastCtrl: ToastController) { }





  actualizarCredito(tipo, codigo, user, nuevoMonto) {

    let flag = false;

    user.codigosCargados.forEach(element => {
      if (element == codigo) {
        
        
        let toast = this.toastCtrl.create({
          message: 'Codigo ya cagado',
          duration: 3000,
          position: 'top'}).then( rest=>
          rest.present());
        navigator.vibrate(500);
        flag = true;
      }
    });

    if (!flag) {

      const userRef: AngularFirestoreDocument<any> = this.fireStore.doc(tipo + `/${user.uid}`);

      user.codigosCargados.push(codigo)
      const data = {
        codigosCargados: user.codigosCargados,
        credito: nuevoMonto
      }
      userRef.update(data)
    }

  }

  traerUno(uid) {
    return this.fireStore.collection('users').doc(uid).valueChanges();
  }

  traertodos(tipo) {
    let items: Array<any>;
    items = new Array();
    console.log('traer' + tipo);
    return this.fireStore.collection('/' + tipo).snapshotChanges();


  }







}
