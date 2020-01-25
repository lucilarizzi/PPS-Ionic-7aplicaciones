import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Cosas } from '../clases/cosas';

@Injectable({
  providedIn: 'root'
})
export class PuntosService {

  constructor( private fireStore: AngularFirestore) { }

  traertodos(tipo) {

    let  items: Array<any>;
    items= new Array();
      console.log('traer' + tipo);
     this.fireStore.collection('/'+tipo).snapshotChanges().forEach( user => {
        user.forEach( userData =>{
          items.push( userData.payload.doc.data());
          let data = userData.payload.doc.data();
          let id = userData.payload.doc.id;
          console.log( "ID: ", id, " Data: " , data );
          });
      });
      return items  
    }

    traerUno(tipo, uid) {
      return this.fireStore.collection('users').doc(uid).valueChanges();
     }







}
