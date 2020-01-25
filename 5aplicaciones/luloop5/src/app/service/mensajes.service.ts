import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  public isLogged: any=false;
 
  constructor(
    private firestore: AngularFirestore,
    public afAuth:AngularFireAuth) {
      afAuth.authState.subscribe(Usuario=>(this.isLogged=Usuario));
     }
  
 
 
  create_Mensaje(record) {
    return this.firestore.collection('mensajes').add(record);
  }
 
  read_Mensaje() {
    return this.firestore.collection('mensajes').snapshotChanges();
  }
 
 
}
