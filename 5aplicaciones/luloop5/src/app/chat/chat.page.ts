import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChildren(IonContent) content: IonContent;
  titulo;
  ////////////

  misMensajes2: Array<any>;
  mensaje: String;
  usuarioActual;

  ///////////// decidir
  misMensajes: Observable<any>;
  mostrarChat: Boolean;


  constructor(private fireStore: AngularFirestore, private auth: AuthService) { }

  ngOnInit() {
    this.titulo = localStorage.getItem('chat');
    console.log("my-chat");

    this.misMensajes = this.fireStore.collection("msj_" + this.titulo, ref =>
      ref.orderBy('date', 'asc')).valueChanges();

    this.misMensajes.subscribe((chats => {
      console.log(chats);
      this.usuarioActual = this.auth.whoIsLogIn().email.split("@")[0];
      this.misMensajes2 = chats;
    }));
    this.mostrarChat = true;

  }

  enviar() {
    this.fireStore.collection("msj_" + this.titulo).add({
      Elmensaje: this.mensaje,
      date: new Date(Date.now()).toLocaleTimeString() + " " + new Date(Date.now()).toLocaleDateString(),
      usuario: this.auth.whoIsLogIn().email.split("@")[0],
      mail: this.auth.whoIsLogIn().email
    });

    var out = document.getElementById("ul");
    
      out.scrollTop = out.scrollHeight;

  }




}

