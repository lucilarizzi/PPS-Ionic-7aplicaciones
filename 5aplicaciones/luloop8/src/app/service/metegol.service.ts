import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { ToastController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Metegol } from '../clases/metegol';
import { ResultMetegol } from '../clases/result-metegol';

@Injectable({
  providedIn: 'root'
})
export class MetegolService {

  constructor(private fireStore: AngularFirestore, private auth: AuthService, private toastCtrl: ToastController) { }

  enviarNuevoJuego(nuevoMetegol) {
    return this.fireStore.collection("metegol").add(JSON.parse(JSON.stringify(nuevoMetegol)));
  }


  traerTodosJuegos() {
    return this.fireStore.collection("metegol").snapshotChanges();
  }

  agregarJugada(juego: Metegol, nuevoResult: ResultMetegol, uid) {
    const userRef: AngularFirestoreDocument<any> = this.fireStore.doc("metegol" + `/${uid}`);
    console.log(" juego", juego.resultador);
    juego.resultador.push(nuevoResult);
    userRef.update(JSON.parse(JSON.stringify(juego)));
  }


  traerUno(uid) {
    return this.fireStore.collection('metegol').doc(uid).valueChanges();
  }









}
