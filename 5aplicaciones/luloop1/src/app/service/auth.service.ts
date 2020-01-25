import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../clases/usuario';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore, private nativeAudio: NativeAudio,
  ) {
    afAuth.authState.subscribe(Usuario => (this.isLogged = Usuario));
  }

  async onLogin(Usuario: Usuario) {
    try {
      const provider = this.afAuth.auth.signInWithEmailAndPassword(Usuario.email, Usuario.clave);
      return this.updateUserData(provider, "site");

    } catch (error) {
      console.log('Error on login Usuario: ', error);
    }
  }


  async registrarse(jugador) {
    /* this.afAuth.auth.createUserWithEmailAndPassword (this.email,  this.clave); */
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(jugador.email, jugador.clave);
    console.log(credential.user.uid + " credential.user.uid")
    this.enviar(jugador, credential.user.uid);
  }

  whoIsLogIn() {
    return this.afAuth.auth.currentUser;
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user, "google");
  }

  private updateUserData(user, donde) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      from: donde
    }

    userRef.set(data, { merge: true })

  }

  async signOut() {

    setTimeout(() => {
      this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");
    }, 500);
    
    this.nativeAudio.play('splash');

    setTimeout(() => {
      this.nativeAudio.unload('splash');
      this.afAuth.auth.signOut();
    }, 2300);




  }


  enviar(jugadorNuevo: Usuario, uid2) {
    var sp = jugadorNuevo.email.split('@');
    return this.afs.collection('users').add({

      uid: uid2,
      email: jugadorNuevo.email,
      displayName: sp[0],
      photoURL: '"./assets/foto.png",',
      from: "site",
      clave: jugadorNuevo.clave
    })

  }


}
