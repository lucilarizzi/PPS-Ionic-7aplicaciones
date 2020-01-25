import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HomePageModule } from '../home/home.module'
import { HomePage } from '../home/home.page';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  idiomaSele: string;
  animales: boolean;
  colores: boolean;
  numeros: boolean;
  spinner;
  public lottieConfig: Object;

  constructor(private nativeAudio: NativeAudio) {
    this.idiomaSele = "es";
    this.animales = true;
    this.colores = false;
    this.numeros = false;

    console.log(" ");
    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
    };

    this.spinner = true;
    setTimeout(() => this.spinner = false, 2000)
    


  }

  elegirGrilla(opcion: string) {
    switch (opcion) {
      case 'ani':
        this.animales = true;
        this.colores = false;
        this.numeros = false;
        break
      case 'num':
        this.animales = false;
        this.colores = false;
        this.numeros = true;
        break
      case 'col':
        this.animales = false;
        this.colores = true;
        this.numeros = false;
        break
    }


  }


  ngOnInit() {
    this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");
    this.nativeAudio.play('splash');
    setTimeout(() => {
      this.nativeAudio.unload('splash');
    }, 1000);
   
  }

recibirIdioma(event)
{
  this.idiomaSele = event;
}

 

}
