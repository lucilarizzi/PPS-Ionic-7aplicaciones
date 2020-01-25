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

  mesaActual: string;
  public lottieConfig: Object;
  spinner;


  constructor(private router: Router, private nativeAudio: NativeAudio) {
    console.log(" ");
    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
    };
  }

  ngOnInit() {

    this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");
    this.nativeAudio.play('splash');
    setTimeout(() => {
      this.nativeAudio.unload('splash');
    }, 1000);

  }

  pps4a() {

    this.router.navigate(["/chat"]);
    localStorage.setItem('chat', '4a');

  }

  pps4b() {
    this.router.navigate(["/chat"]);
    localStorage.setItem('chat', '4b');

  }


}
