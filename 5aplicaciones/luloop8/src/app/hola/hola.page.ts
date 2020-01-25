import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HomePageModule } from '../home/home.module'
import { HomePage } from '../home/home.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Cosas } from '../clases/cosas';
import { Usuario } from '../clases/usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Metegol } from '../clases/metegol';
import { AuthService } from '../service/auth.service';
import { MetegolService } from '../service/metegol.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';




@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  perfil;
  admin;
  jug1;
  jug2;
  todo;
  public lottieConfig: Object;
  spinner;


  constructor(private router: Router,
    private auth: AuthService,
    private meteService: MetegolService,
    private nativeAudio: NativeAudio) {

    this.perfil = localStorage.getItem('perfil');

    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
    };

    this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");

  }

  ngOnInit() {



    this.spinner = true;
    setTimeout(() => this.spinner = false, 2000)

    this.nativeAudio.play('splash');


    if (this.perfil == "admin") {
      this.admin = true;
    }
    else {
      this.admin = false;
    }




  }

  empezar() {

    let nuevoJuego = new Metegol();
    nuevoJuego.jugador1 = this.jug1;
    nuevoJuego.jugador2 = this.jug2;
    nuevoJuego.fecha = new Date(Date.now());
    nuevoJuego.email = this.auth.whoIsLogIn().email;

    this.meteService.enviarNuevoJuego(nuevoJuego).then((e) => {
      //   console.log("eeeee", e.id);
      localStorage.setItem("uid", e.id);
      localStorage.setItem("jugador1", this.jug1);
      localStorage.setItem("jugador2", this.jug2);
      this.router.navigate(["/carga-juego"]);
    });


  }

  listadoPartido() {
    this.meteService.traerTodosJuegos().subscribe((e) => console.log("traerTodos", e));
  }





}
