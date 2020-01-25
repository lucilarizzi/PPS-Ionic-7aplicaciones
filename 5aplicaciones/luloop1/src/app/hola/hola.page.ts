import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HomePageModule } from '../home/home.module'
import { HomePage } from '../home/home.page';
import { ModalController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeAudio } from '@ionic-native/native-audio/ngx';




@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  mesaActual: string;
  spinner;
  public lottieConfig: Object;


  constructor(private router: Router,
    public modalController: ModalController,
    private spinner2: NgxSpinnerService,
    private nativeAudio: NativeAudio) {
    console.log(" ");
    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
    };
    this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");
  }

  async ngOnInit() {
    this.spinner = true;
    setTimeout(() => this.spinner = false, 2000)
    this.nativeAudio.play('splash');


  }

  lindas() {

    this.nativeAudio.play('splash');
    setTimeout(() => {
      this.nativeAudio.unload('splash');
      this.router.navigate(["/cosas", 'cosasLindas']);
      localStorage.setItem('cosas', 'cosasLindas');
    }, 2300);


  }

  feas() {
    this.nativeAudio.play('splash');
    setTimeout(() => {
      this.nativeAudio.unload('splash');
      this.router.navigate(["/cosas", 'cosasFeas']);
      localStorage.setItem('cosas', 'cosasFeas');
    }, 2300);

  }


}
