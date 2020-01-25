import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../clases/usuario';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    afAuth.authState.subscribe(Usuario => (this.isLogged = Usuario));
  }

  async onLogin(Usuario: Usuario) {
    try {      
      const provider = this.afAuth.auth.signInWithEmailAndPassword(Usuario.email, Usuario.clave);
      console.log("provider", provider); 
    
    } catch (error) {
      console.log('Error on login Usuario: ', error);
    }
  }


  async registrarse(jugador) {
   
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

    console.log(user.uid + "uid");    

    const data = {
      uid: user.uid,
    }

    console.log(data);
    

    userRef.set(data, { merge: true })

  }

    async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(["/home"]); 
  }


  enviar(jugadorNuevo: Usuario, uid2) {
    var sp = jugadorNuevo.email.split('@');
    return this.afs.collection('users').add({

      uid: uid2,
      email: jugadorNuevo.email,
      displayName: sp[0],
      photoURL: '"./assets/foto.png",',
      from: "site",
      clave: jugadorNuevo.clave,
      credito:0,
      codigosCargados: [],
      perfil: "usuario"
    })

  }


}
